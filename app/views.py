from app import app, db
from app.models import Projects
from flask import render_template, request

@app.route('/', methods=['GET'])
def index():

    return_projects = {}
    all_projects = Projects.query.all()

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

    return render_template('index.html', full_project_data=return_projects)

@app.route('/search', methods=['GET'])
def search():

    tech_query = request.args.get('tech')
    filter_type = request.args.get('type')

    # searches for a tech keyword
    if tech_query:

        return_projects = {}
        search = "%{}%".format(tech_query)
        all_projects = Projects.query.filter(Projects.tech.like(search)).all()

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

        return render_template('index.html', full_project_data=return_projects, search_query=tech_query)

    # searches for presence of 'CS50' in project name
    elif filter_type == 'CS50':

        return_projects = {}
        search = "%{}%".format('CS50')
        all_projects = Projects.query.filter(Projects.name.like(search)).all()

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

        return render_template('index.html', full_project_data=return_projects, show='CS50')

    # searches for lack of presence of 'CS50' in project name
    elif filter_type == 'NOT-CS50':

        return_projects = {}
        search = "%{}%".format('CS50')
        all_projects = Projects.query.filter(Projects.name.notlike(search)).all()

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

        return render_template('index.html', full_project_data=return_projects, show='NOT-CS50')

    # returns everything
    else:

        return_projects = {}
        all_projects = Projects.query.all()

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

        return render_template('index.html', full_project_data=return_projects)


@app.route('/dev/projects', methods=['GET', 'POST', 'PUT', 'DELETE'])
def projects():
    if request.method == 'GET':

        return_projects = {}
        all_projects = Projects.query.all()

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

        return return_projects, 200

    if request.method == 'POST':

        args = {}
        args['name'] = request.args.get('name')
        args['date'] = request.args.get('date')
        args['time'] = request.args.get('time') or None
        args['tech'] = request.args.get('tech') or None
        args['link'] = request.args.get('link') or None
        args['link2'] = request.args.get('link2') or None
        args['prio'] = request.args.get('prio') or None

        if not args['name']:
            return {'Error': 'Please provide a project name'}, 400
        if not args['date']:
            return {'Error': 'Please provide a project date'}, 400

        new_project = Projects(
            name = args['name'],
            time = args['time'],
            tech = args['tech'],
            link = args['link'],
            link2 = args['link2'],
            date = args['date'],
            prio = args['prio']
        )

        db.session.add(new_project)
        db.session.commit()

        return {'Success': 'Created the following item', 'item': {
            'id': new_project.id,
            'name': new_project.name,
            'time': new_project.time,
            'tech': new_project.tech,
            'link': new_project.link,
            'link2': new_project.link2,
            'date': new_project.date,
            'prio': new_project.prio
        }}, 200

    if request.method == 'DELETE':

        to_del_id = request.args.get('id')
        if not to_del_id:
            return {'Error': 'Please provide a project id to delete'}, 400

        project_to_delete = Projects.query.filter_by(id=to_del_id).first()

        if not project_to_delete:
            return {'Message': 'No project by that id!'}, 404

        db.session.delete(project_to_delete)
        db.session.commit()

        return {'Success': 'Deleted the following item', 'item': {
            'id': project_to_delete.id,
            'name': project_to_delete.name,
            'time': project_to_delete.time,
            'tech': project_to_delete.tech,
            'link': project_to_delete.link,
            'date': project_to_delete.date,
            'prio': project_to_delete.prio
        }}, 200

    if request.method == 'PUT':

        # get args
        args = {}
        args['id'] = request.args.get('id')
        args['name'] = request.args.get('name') or None
        args['time'] = request.args.get('time') or None
        args['tech'] = request.args.get('tech') or None
        args['link'] = request.args.get('link') or None
        args['link2'] = request.args.get('link2') or None
        args['date'] = request.args.get('date') or None
        args['prio'] = request.args.get('prio') or None

        if not args['id']:
            return {'Error': 'Please provide a project id'}, 400

        # get the project
        project_to_modify = Projects.query.filter_by(id=args['id']).first()

        if not project_to_modify:
            return {'Message': 'No project by that id!'}, 404

        # store old info for return message
        item_old = {}
        item_old['name'] = project_to_modify.name
        item_old['time'] = project_to_modify.time
        item_old['tech'] = project_to_modify.tech
        item_old['link'] = project_to_modify.link
        item_old['link2'] = project_to_modify.link2
        item_old['date'] = project_to_modify.date
        item_old['prio'] = project_to_modify.prio

        # change project info, after ensuring data was passed
        if args['name']:
            project_to_modify.name = args['name']
        if args['time']:
            project_to_modify.time = args['time']
        if args['tech']:
            project_to_modify.tech = args['tech']
        if args['link']:
            project_to_modify.link = args['link']
        if args['link2']:
            project_to_modify.link2 = args['link2']
        if args['date']:
            project_to_modify.date = args['date']
        if args['prio']:
            project_to_modify.prio = args['prio']

        # save to db
        db.session.add(project_to_modify)
        db.session.commit()

        return {
            'Success': 'Changed the following item',
            'item-old': {
                'id': project_to_modify.id,
                'name': item_old['name'],
                'time': item_old['time'],
                'tech': item_old['tech'],
                'link': item_old['link'],
                'link2': item_old['link2'],
                'date': item_old['date'],
                'prio': item_old['prio']
            },
            'item-new': {
                'id': project_to_modify.id,
                'name': project_to_modify.name,
                'time': project_to_modify.time,
                'tech': project_to_modify.tech,
                'link': project_to_modify.link,
                'link2': project_to_modify.link2,
                'date': project_to_modify.date,
                'prio': project_to_modify.prio
            }
        }, 200



