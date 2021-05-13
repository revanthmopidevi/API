# SampleAPI

Test third-party applications' integration with this API.
## Routes
**/**       ==> GET increment hit count by 1. Response: code 200 & number of hits.

**/hits**   ==> GET number of hits without incrementing. Response: code 200 & number of hits.
  
**/data**   ==> GET an array of objects. Response: code 200 & an array of objects (dummy data).

**/alert**  ==> POST a message toPersonalEmail on Cisco Webex Teams.
