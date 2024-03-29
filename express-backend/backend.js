import express from "express";
import { addPerson, findPersonByFirstName} from "./models/person-services.js";
import { addStore, findStoreByName} from "./models/store-services.js";
import { addOwner } from "./models/owner-services.js";
import { addCustomer, findCustomerByPersonID } from "./models/customer-services.js";
import { addCustomerOrder } from "./models/customer-order-service.js";
import { addEmployee, findEmployeeByPersonID } from "./models/employee-services.js";
import { addCompany } from "./models/company-services.js";
import { addSupplier, findSupplierByID } from "./models/supplier-services.js";
import { addItem, findItemByID } from "./models/item-services.js";
import { addContract, findContractByID } from "./models/contract-services.js";
import { addProduct, findProductByID } from "./models/product-services.js";
import { addWorkScheduling, findWorkSchedulingByEmplId } from "./models/work-scheduling-services.js";


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

app.post('/populateSupplier', (req, res) => {
    addSupplier({
        ID: 1,
        Name: "Trust Us",
        Address: "123 abc st",
        PhoneNo: "911"
    });
    addSupplier({
        ID: 2,
        Name: "cal poly",
        Address: "1 grand ave",
        PhoneNo: "1234567890"
    });
});

app.post('/populateItem', (req, res) => {
    addItem({
        ID: 1,
        Name: "Beef",
        Cost: 8.01,
        Quantity: 1
    });
    addItem({
        ID: 1,
        Name: "Cheese",
        Cost: 2.99,
        Quantity: 10
    });
});

app.post('/populateContract', (req, res) => {
    findStoreByName("LA").then((resp) => {
        const storeID = resp[0]._id.toString();
        addContract({
            ID: 1,
            SupplierID: 1,
            StoreID: storeID,
            ItemID: 1,
        });
    });
    findStoreByName("SLO").then((resp) => {
        const storeID = resp[0]._id.toString();
        addContract({
            ID: 2,
            SupplierID: 2,
            StoreID: storeID,
            ItemID: 2,
        });
    });
});

app.post('/populateProduct', (req, res) => {
    addProduct({
        ID: 1,
        Price: 9.99,
        TaxRate: 0.01,
        Recipe: "Grilled cheese sandwich receipe"
    });
    addProduct({
        ID: 2,
        Price: 2.22,
        TaxRate: 0.02,
        Recipe: "None"
    });
});

app.post('/populateCompany', (req, res) => {
    addCompany({
        Name: "Nike",
        countryOfIncorperation: "Los Angeles"
    });
    addCompany({
        Name: "cal poly",
        countryOfIncorperation: "San Luis Obispo"
    });
});

app.post('/populateCustomerOrder', (req, res) => {
    findPersonByFirstName("customer").then((res) => {
        const personID = res[0]._id.toString();
        findCustomerByPersonID(personID).then((response) => {
            const customerID = response[0]._id.toString();
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
    });
    findPersonByFirstName("cal").then((res) => {
        const personID = res[0]._id.toString();
        findCustomerByPersonID(personID).then((response) => {
            const customerID = response[0]._id.toString();
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
});

app.post('/populateWorkScheduling', (req, res) => {
    findPersonByFirstName("employee").then((res) => {
        const personID = res[0]._id.toString();
        findEmployeeByPersonID(personID).then((response) => {
            const employeeID = response[0]._id.toString();
            findStoreByName("SLO").then((resp) => {
                const storeID = resp[0]._id.toString();
                addWorkScheduling({
                    EmplId: employeeID,
                    StoreID: storeID,
                    StartTime: new Date(),
                    EndTime: new Date()
                });
            });
        });
    });
    findPersonByFirstName("cal").then((res) => {
        const personID = res[0]._id.toString();
        findEmployeeByPersonID(personID).then((response) => {
            const employeeID = response[0]._id.toString();
            findStoreByName("LA").then((resp) => {
                const storeID = resp[0]._id.toString();
                addWorkScheduling({
                    EmplId: employeeID,
                    StoreID: storeID,
                    StartTime: new Date(),
                    EndTime: new Date()
                });
            });
        });
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 