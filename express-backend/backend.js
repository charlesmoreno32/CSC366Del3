import express from "express";
import { addPerson, findPersonByFirstName} from "./models/person-services.js";
import { addStore, findStoreByName} from "./models/store-services.js";
import { addOwner } from "./models/owner-services.js";
import { addCustomer } from "./models/customer-services.js";
import { addCustomerOrder } from "./models/customer-order-service.js";
import { addEmployee } from "./models/employee-services.js";


const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/populatePeopleTables', (req, res) => {
    addPerson({
        username: "cal poly",
        email: "dummy@gmail.com",
        address: "1 Grand Ave",
        phoneNo: "911",
        FirstName: "cal",
        LastName: "poly"
    });
    addPerson({
        username: "customer",
        email: "customer@gmail.com",
        address: "1 Grand Ave",
        phoneNo: "911",
        FirstName: "customer",
        LastName: "example"
    });
    addPerson({
        username: "owner",
        email: "owner@gmail.com",
        address: "1 Grand Ave",
        phoneNo: "911",
        FirstName: "owner",
        LastName: "example"
    });
    addPerson({
        username: "employee",
        email: "employee@gmail.com",
        address: "1 Grand Ave",
        phoneNo: "911",
        FirstName: "employee",
        LastName: "example"
    });

    findPersonByFirstName("cal").then((res) => {
        const calpolyID = res[0]._id.toString();
        addOwner({
            person_id: calpolyID,
            company_name: "cal poly",
            company_ownings: 1.23
        });
        addCustomer({
            person_id: calpolyID,
            CustomerID: 1,
            RewardsOption: true,
            PaymentType: "card"
        });
        findStoreByName("LA").then((resp) => {
            const storeID = resp[0]._id.toString();
            addEmployee({
                person_id: calpolyID,
                SSN: 1,
                StoreID: storeID
            });
        });
    });
    findPersonByFirstName("owner").then((res) => {
        const ownerID = res[0]._id.toString();
        addOwner({
            person_id: ownerID,
            company_name: "Nike",
            company_ownings: 12.3
        }); 
    });
    findPersonByFirstName("customer").then((res) => {
        const customerID = res[0]._id.toString();
        addCustomer({
            person_id: customerID,
            CustomerID: 2,
            RewardsOption: false,
            PaymentType: "cash"
        }); 
    });
    
    findPersonByFirstName("employee").then((res) => {
        const employeeID = res[0]._id.toString();
        findStoreByName("SLO").then((resp) => {
            const storeID = resp[0]._id.toString();
            addEmployee({
                person_id: employeeID,
                SSN: 1,
                StoreID: storeID
            });
        }); 
    });


});

app.post('/populateStore', (req, res) => {
    addStore({
        Name: "LA",
        City: "Los Angeles",
        State: "California",
    });
    addStore({
        Name: "SLO",
        City: "San Luis Obispo",
        State: "California",
    });
});

app.post('/populateCustomerOrder', (req, res) => {
    findPersonByFirstName("customer").then((res) => {
        const customerID = res[0]._id.toString();
        findStoreByName("SLO").then((resp) => {
            const storeID = resp[0]._id.toString();
            addCustomerOrder({
                customerID: customerID,
                storeID: storeID,
                orderDate: new Date(),
                totalAmount: 100,
                paymentType: "cash"
            });
        });
    });
    findPersonByFirstName("cal").then((res) => {
        const customerID = res[0]._id.toString();
        findStoreByName("LA").then((resp) => {
            const storeID = resp[0]._id.toString();
            addCustomerOrder({
                customerID: customerID,
                storeID: storeID,
                orderDate: new Date(),
                totalAmount: 7,
                paymentType: "credit"
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 