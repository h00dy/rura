from .base import *


DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = get_env_variable("SECRET_KEY")

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'HOST': 'localhost',
        'NAME': 'rura',
        'USER': get_env_variable("DB_USER"),
        'PASSWORD': get_env_variable("DB_PASS")
    }
}
