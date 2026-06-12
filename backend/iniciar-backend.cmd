@echo off
setlocal

if not defined JAVA_HOME (
    if exist "C:\Program Files\JetBrains\IntelliJ IDEA 2025.3.3\jbr\bin\java.exe" (
        set "JAVA_HOME=C:\Program Files\JetBrains\IntelliJ IDEA 2025.3.3\jbr"
    ) else if exist "%USERPROFILE%\.jdks\openjdk-25.0.2\bin\java.exe" (
        set "JAVA_HOME=%USERPROFILE%\.jdks\openjdk-25.0.2"
    ) else (
        echo Java nao encontrado. Configure a variavel JAVA_HOME.
        exit /b 1
    )
)

set "PATH=%JAVA_HOME%\bin;%PATH%"
call "%~dp0mvnw.cmd" spring-boot:run
