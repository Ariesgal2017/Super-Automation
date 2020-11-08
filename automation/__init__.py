from automation.__version__ import __version__  # noqa
from automation.fixtures.base_case import Base  # noqa
from automation.manual_qa.manual_qa import ManualQA  # noqa
from automation.common import decorators  # noqa
from automation.common import encryption  # noqa
import sys
if sys.version_info[0] >= 3:
    from automation import translate  # noqa
del sys  # Undo "import sys" / Simplify "dir(automation)"
