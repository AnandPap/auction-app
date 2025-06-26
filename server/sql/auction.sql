--DROP CAST IF EXISTS (CHARACTER VARYING as user_role);
DROP TABLE IF EXISTS user_profiles;
DROP TABLE IF EXISTS payment_methods;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS addresses;

DROP TYPE IF EXISTS user_role;
DROP TYPE IF EXISTS gender_enum;
DROP TYPE IF EXISTS notification_type_enum;
DROP TYPE IF EXISTS method_type_enum;
DROP TYPE IF EXISTS provider_enum;

CREATE TYPE user_role AS ENUM ('USER', 'ADMIN');
CREATE TYPE gender_enum AS ENUM ('MALE', 'FEMALE', 'OTHER');
CREATE TYPE notification_type_enum AS ENUM ('EMAIL', 'PUSH', 'SMS');
CREATE TYPE method_type_enum AS ENUM ('CREDIT_CARD', 'PAYPAL');
CREATE TYPE provider_enum AS ENUM ('STRIPE', 'PAYPAL');

-- Zamijenjeno sa ?stringtype=unspecified ali sacuvano kao referenca
-- CREATE CAST (CHARACTER VARYING as user_role) WITH INOUT AS IMPLICIT;

CREATE TABLE IF NOT EXISTS addresses (
    id BIGSERIAL PRIMARY KEY,
    street VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(50),
    country VARCHAR(50) NOT NULL,
    zip_code VARCHAR(20) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    version INTEGER
);

CREATE TABLE IF NOT EXISTS users (
	-- BIGSERIAL umjesto SERIAL zbog Long Id u Springu
    id BIGSERIAL PRIMARY KEY,
	address_id BIGINT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role user_role NOT NULL DEFAULT 'USER',
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user_profiles_user FOREIGN KEY (address_id) REFERENCES addresses(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS user_profiles (
    user_id BIGINT PRIMARY KEY,
    birth_date DATE CHECK (birth_date < CURRENT_DATE),
    gender gender_enum,
    profile_image_url VARCHAR(255),
    phone_number VARCHAR(20),
    phone_number_verified BOOLEAN DEFAULT FALSE,
    activated BOOLEAN NOT NULL DEFAULT TRUE,
    notification_type notification_type_enum,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    version INTEGER,
    CONSTRAINT fk_user_profiles_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS payment_methods (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL,
    owner_name VARCHAR(100) NOT NULL,
    method_type method_type_enum NOT NULL,
    provider provider_enum NOT NULL,
    token VARCHAR(255) NOT NULL,
    paypal_email VARCHAR(100),
    last_four_digits VARCHAR(4),
    expiration_year INTEGER,
    expiration_month INTEGER,
    credit_card_brand VARCHAR(30),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    version INTEGER,
    CONSTRAINT fk_payment_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

