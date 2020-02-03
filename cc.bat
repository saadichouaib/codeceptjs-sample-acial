for %%f in (.\output\*.*) do (if not "%%~xf"==".properties" del "%%~f")
.\node_modules\.bin\codeceptjs %*