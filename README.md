# Personal Website
Portfolio | About Me | Contact Info | REST API

### Technology
- Flask (Python)
- SQLite
- HTML5, CSS3, & JavaScript

### Why is this code public?
- To demonstrate my coding ability and style
- NOT to be used as a template for another website

### Contents of this repository
- Contains all project files apart from authorization functionality and other files listed in .gitignore.
- Due to this repository not containing authentication files, the REST API at /dev/projects will not work out of the box.
- The API is used to perform CRUD operations on the database - containing my portfolio data

### Interested in how the site runs?
- Clone repository
- install requirements from requirements.txt and package.json (using pip and npm respectively)
- Run 'grunt concat' to generate concatenated css file that is linked in index.html
- Insert authentication files, if applicable
- Run 'python3 run.py' for classic flask dev server
- Run the classic flask dev server, then run: 'grunt browserSync' for live reload dev server (proxy using BrowserSync)
