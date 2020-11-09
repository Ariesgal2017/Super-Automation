@ECHO OFF
py -m pip --upgrade pip
pip install -e . --upgrade --no-cache-dir --progress-bar off
python setup.py install
pip install -r requirements.txt
zahed install chrome -l
zahed install gecko -l
zahed install edge -l
zahed install ie -l
zahed install opera -l
py -m pip install virtualenvwrapper-win --force-reinstall --user
echo:
echo:
echo: *** You may now use virtualenv commands in your command shell. ***
echo:
echo: virtualenv commands:
echo:   *  "mkvirtualenv [ENV_NAME]"  -  Create a Python virtual environment
echo:   *  "deactivate"               -  Exit the current virtual environment
echo:   *  "workon [ENV_NAME]"        -  Enter an existing virtual environment
echo:   *  "lsvirtualenv" OR "workon" -  List all virtual environments
echo:   *  "rmvirtualenv [ENV_NAME]"  -  Delete a virtual environment
echo:
echo: Example:
echo:       mkvirtualenv automation
echo:       mkvirtualenv automation --python=[PATH_TO_PYTHON]
echo:
