#!/bin/sh

echo "Starting PostgreSQL setup..."
if [ -z "$(ls -A "$PGDATA")" ]; then
    echo "Initializing PostgreSQL database..."    
    initdb -D $PGDATA
    
    echo "Configuring PostgreSQL..."
    echo 'host all all 0.0.0.0/0 md5' >> $PGDATA/pg_hba.conf
    echo "listen_addresses='*'" >> $PGDATA/postgresql.conf
    
    echo "Starting PostgreSQL for initial setup..."
    pg_ctl -D $PGDATA -w start

    echo "Creating production database and user..."
    createuser -d $POSTGRES_USER
    createdb -O $POSTGRES_USER $POSTGRES_DB
    
    echo "Setting the production password..."
    psql -c "ALTER USER $POSTGRES_USER WITH PASSWORD '$POSTGRES_PASSWORD';"
    # Development Database will be used with the backend Branch (Must be); The .env of Backend will changed in Main Branch and then automaticly Swiching to Prod Database
    if [ -n "$POSTGRES_DEV_DB" ] && [ -n "$POSTGRES_DEV_USER" ] && [ -n "$POSTGRES_DEV_PASSWORD" ]; then
        echo "Creating development database and user..."
        if ! psql -tAc "SELECT 1 FROM pg_roles WHERE rolname='$POSTGRES_DEV_USER'" | grep -q 1; then
            createuser -d $POSTGRES_DEV_USER
            echo "Setting the development password..."
            psql -c "ALTER USER \"$POSTGRES_DEV_USER\" WITH PASSWORD '$POSTGRES_DEV_PASSWORD';"
        else
            echo "Development user already exists, updating password..."
            psql -c "ALTER USER \"$POSTGRES_DEV_USER\" WITH PASSWORD '$POSTGRES_DEV_PASSWORD';"
        fi
        if ! psql -lqt | cut -d \| -f 1 | grep -qw $POSTGRES_DEV_DB; then
            createdb -O $POSTGRES_DEV_USER $POSTGRES_DEV_DB
        fi
        echo "Adding sample data to development database..."
        psql -d $POSTGRES_DEV_DB -c "CREATE TABLE IF NOT EXISTS dev_sample (id SERIAL PRIMARY KEY, name TEXT, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);"
        psql -d $POSTGRES_DEV_DB -c "INSERT INTO dev_sample (name) VALUES ('Sample Dev Data 1'), ('Sample Dev Data 2');"
    else
        echo "Skipping development database setup (environment variables not set)"
    fi
    echo "Setting up permissions..."
    psql -c "GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER;"
    if [ -n "$POSTGRES_DEV_DB" ] && [ -n "$POSTGRES_DEV_USER" ]; then
        psql -c "GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DEV_DB TO \"$POSTGRES_DEV_USER\";"
    fi
    
    echo "Stopping temporary PostgreSQL instance..."
    pg_ctl -D $PGDATA -m fast -w stop
    
    echo "Initial PostgreSQL setup completed!"
fi

if [ "$1" = "healthcheck" ]; then
    pg_isready -U $POSTGRES_USER
    exit $?
fi

echo "Starting PostgreSQL server..."
exec postgres -D $PGDATA