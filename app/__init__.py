from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)

# database config
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///noahrayroberts.db'
db = SQLAlchemy(app)

# database migrations config
migrate = Migrate(app, db)

from app import views
from app import models
