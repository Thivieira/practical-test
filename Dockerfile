# Use the official WordPress image as the base
FROM wordpress:latest

# Install curl and php-cli for Composer installation
RUN apt-get update && apt-get install -y curl && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    apt-get clean && rm -rf /var/lib/apt/lists/*
