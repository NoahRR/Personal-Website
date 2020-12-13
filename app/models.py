from app import db

class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False) # name of project
    date = db.Column(db.String(100), nullable=False) # mm-dd-year of COMPLETION
    prio = db.Column(db.Integer, nullable=True, default=0) # 0-10 scale of importance

    time = db.Column(db.String(10), nullable=True) # time to complete
    tech = db.Column(db.String(100), nullable=True) # top 3 tech used
    link = db.Column(db.String(1000), nullable=True) # GITHUB LINK
    link2 = db.Column(db.String(1000), nullable=True) # LIVE SITE LINK

    def __repr__(self):
        return f"name: {self.name}"
