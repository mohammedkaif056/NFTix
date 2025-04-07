@echo off
IF "%~1"=="" (
    echo Error: Network must be specified as an argument.
    echo Usage: %0 ^<network^>
    exit /b 1
)

npx hardhat ignition deploy ignition/modules/EventManager.ts --network %1
