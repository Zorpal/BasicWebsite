Hi there, this repo contains some basic code for a frontend-backend website, which was my prototype 1 for the AQA Computer Science A-Level Coursework. This was made using a combination of Python, JavaScript, CSS and HTML; I developed my application in a Python virtual environment (venv) which is advisable to avoid any conflictions with any present systemwide packages. 



**Installation instructions**

To clone my project into Visual Studio Code using source control:

 - Navigate to Source Control on the left toolbar, click on "Clone Repository"
 - Enter in the URL of this repo i.e "github.com/Zorpal/BasicWebsite"
 - Choose a folder to clone the repo into
To download the files through a terminal:
 - curl https://github.com/Zorpal/BasicWebsite/archive/refs/heads/main.zip
 - wget https://github.com/Zorpal/BasicWebsite/archive/refs/heads/main.zip
 - Extract the file using tar, unzip etc

**Ensure you have Python and NodeJS installed on your system**
  
Open 2 terminals, and make sure you have navigated to the **first** "NEA" folder. This folder should contain "frontend", "NEA" and "requirements.txt"
   
**Setting up a virtual environment (optional but advisable)**
(*You can replace env with any name, though venv will be used in the instructions*})
   
For _macOS/linux users_, Run the following commands:
   -   python3 -m venv env 
   -   source env/bin/activate\
For _Windows users using Powershell_, Run the following commands:
   -   python -m venv env 
   -   env\Scripts\Activate.ps1
For _Windows users using Command Prompt_, Run the following commands:
   -   python -m venv env
   -   env\Scripts\Activate.bat

**Installing required packages**
(*Notice for those without a virtual environment*: Note that for macOS users and others in some cases, you will need to replace python, pip with python3, pip3. Venv removes the need for the 3!)

Run the following command (Ensure you are in the first "NEA" folder which has the "requirements.txt" file:
  - pip install -r requirements.txt

To install manually, Run the following command:
  - pip install django django-cors-headers djangorestframework djangorestframework-simplejwt python-dotenv

**Running the servers**

In the first terminal, navigate to the second "NEA" folder.

Run the following commands:
  - python manage.py runserver

In the second terminal, navigate to the "frontend" folder.

Run the following commands:
  - npm install
  - npm run dev

Then navigate to "localhost:5173/register", as you will need to create an account to use the website
Afterwards, it will prompt you to login!

To create a superuser in django which will automatically allow you to login to the website without registering, run the following command in the terminal that is navigated to the second "NEA" folder:

  - python manage.py createsuperuser

Then follow the instructions to create one. A superuser has full administrator rights and will be able to edit users, edit applicant details and job listings all through the djangoadmin site hosted on "127.0.0.1/admin"

