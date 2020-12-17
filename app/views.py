from app import app, db
from app.models import Projects
from flask import render_template, request

### THIS FILE MANAGES THE FOLLOWING ENDPOINTS: '/', '/search'
### CRUD OPERATIONS FOR '/dev/projects' ARE IN dev_views.py

@app.route('/', methods=['GET'])
def index():

    return_projects = {}
    all_projects = Projects.query.order_by(Projects.prio.desc())

    for project in all_projects:
        return_projects[project.id] = {
            'name': project.name,
            'time': project.time,
            'tech': project.tech,
            'link': project.link,
            'link2': project.link2,
            'date': project.date,
            'prio': project.prio
        }

    return render_template('index.html', full_project_data=return_projects), 200

@app.route('/search', methods=['GET'])
def search():

    tech_query = request.args.get('tech')
    filter_type = request.args.get('type')

    # searches for a tech keyword
    if tech_query:
        return_projects = {}
        search = "%{}%".format(tech_query)
        all_projects = Projects.query.filter(Projects.tech.like(search)).order_by(Projects.prio.desc())

    # searches for presence of 'CS50' in project name
    elif filter_type == 'CS50':
        return_projects = {}
        search = "%{}%".format('CS50')
        all_projects = Projects.query.filter(Projects.name.like(search)).order_by(Projects.prio.desc())

    # searches for lack of presence of 'CS50' in project name
    elif filter_type == 'NOT-CS50':
        return_projects = {}
        search = "%{}%".format('CS50')
        all_projects = Projects.query.filter(Projects.name.notlike(search)).order_by(Projects.prio.desc())

    # returns everything
    else:
        return_projects = {}
        all_projects = Projects.query.order_by(Projects.prio.desc())


    # turns query into usable data format
    for project in all_projects:
        return_projects[project.id] = {
            'name': project.name,
            'time': project.time,
            'tech': project.tech,
            'link': project.link,
            'link2': project.link2,
            #  'date': project.date,
            #  'prio': project.prio
        }

    # return correct data to front-end
    if tech_query:
        return render_template('index.html', full_project_data=return_projects, search_query=tech_query), 200
    elif filter_type:
        return render_template('index.html', full_project_data=return_projects, show=filter_type), 200
    else:
        return render_template('index.html', full_project_data=return_projects), 200


