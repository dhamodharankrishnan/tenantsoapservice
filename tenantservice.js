const soap = require('soap');
const express = require('express');
const app = express();
/**
 * this is remote service defined in this file, that can be accessed by clients, who will supply args
 * response is returned to the calling client
 * our service calculates bmi by dividing weight in kilograms by square of height in metres
 */
const service = {
  Tenant_Service: {
    Tenant_Port: {
      getTenantList(args) {
        console.log('TenantId :'+args.tenantId);
        return { 
            tenantId: '45245234243455',
            firstName: 'Dhamodharan',
            lastName: 'Krishnan',
            phone: '2247039966' 
        };
      }
    }
  }
};
// xml data is extracted from wsdl file created
const xml = require('fs').readFileSync('./tenantservice.wsdl', 'utf8');
//create an express server and pass it to a soap server
const server = app.listen(3050, function() {
  const host = '127.0.0.1';
  const port = server.address().port;
});
soap.listen(server, '/tenantsoapservice', service, xml);