# Zerops + Node.js

Demonstration of techniques around Node.js.

## Zerops import syntax

```yaml
services:
# Service will be accessible through zcli VPN under: http://nodejs:3000
- hostname: nodejs
  # Type and version of a used service.
  type: nodejs@14
  # Whether the service will be run on one or multiple containers.
  # Since this is a utility service, using only one container is fine.
  mode: NON_HA
  # Service port definition (in Node.js it's a user configurable parameter).
  ports:
  - port: 3000
    # If enabled, it means that a web server runs on the port (HTTP application protocol is supported).
    # It also means that you can enable a Zerops subdomain and access the service from the Internet.
    # You can even map public Internet domains with the option of automatic support for SSL certificates.
    httpSupport: true
  # Repository that contains Node.js code with build and deploy instructions.
  buildFromGit: https://github.com/mlc-mlapis/zerops-simple-things@main
```
