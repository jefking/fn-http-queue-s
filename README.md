# Server Default Static
Defaults page (index.htm) for containers. No need for compute on top of raw storage; if you are running static sites.

## Quick Deploy to Azure

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://azuredeploy.net/)

## Configuration

You must create a Container in the storage account once this is created (default 'www'). Then upload your desired site (resources) to the Container.

## Application settings

- **DefaultPage** - index.htm
- **Container** - Container which acts as root of the site (default: www)
- **Storage** - Storage account from which to stream resources from.