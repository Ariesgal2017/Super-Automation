@ECHO OFF
:: Performs necessary setup steps to allow the use of
:: virtualenv commands such as "mkvirtualenv [ENV_NAME]"
:: for creating and using Python virtual environments.


py -m pip install virtualenvwrapper-win --force-reinstall --user
python setup.py install
pip install -r requirements.txt
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
