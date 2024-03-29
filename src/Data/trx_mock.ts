interface Transaction {
  key: React.Key;
  trx_id: number;
  username: string;
  amount: string;
  currency_id: number;
  bankname: string;
  iban: string;
  swift: string;
  account_holder: string;
  country: string;
  status: string;
  trx_init_time: string | any;
  trx_complete_time: string | null | any;
  operator: string;
  part: string;

}
const initialData: Transaction[] = [  
    {
      key: 1,
      "trx_id": 1,
      "username": "testzone",
      "amount": "-1.0000",
      "currency_id": 2,
      "bankname": "bankname",
      "iban": "123456789",
      "swift": "123456",
      "account_holder": "test",
      "country": "austria",
      "status": "confirmed",
      "trx_init_time": "2021-07-29T07:54:56.461Z",
      "trx_complete_time": "2021-07-29T08:40:49.019Z",
      "operator": "develzone",
      "part": "47"
    },
    {
      key: 2,
      "trx_id": 2,
      "username": "testuser",
      "amount": "-5.5000",
      "currency_id": 1,
      "bankname": "bankABC",
      "iban": "987654321",
      "swift": "654321",
      "account_holder": "user1",
      "country": "usa",
      "status": "pending",
      "trx_init_time": "2021-08-05T10:15:30.123Z",
      "trx_complete_time": null,
      "operator": "testoperator",
      "part": "23"
    },
    {
      key: 3,
      "trx_id": 3,
      "username": "anotheruser",
      "amount": "2.3000",
      "currency_id": 3,
      "bankname": "bankXYZ",
      "iban": "111223344",
      "swift": "998877",
      "account_holder": "user2",
      "country": "canada",
      "status": "confirmed",
      "trx_init_time": "2021-08-12T15:20:45.789Z",
      "trx_complete_time": "2021-08-12T16:05:22.567Z",
      "operator": "testuser",
      "part": "89"
    },
    {
      key: 4,
      "trx_id": 4,
      "username": "sampleuser",
      "amount": "-3.7500",
      "currency_id": 2,
      "bankname": "bankPQR",
      "iban": "555555555",
      "swift": "444444",
      "account_holder": "user3",
      "country": "australia",
      "status": "pending",
      "trx_init_time": "2021-08-18T08:45:12.890Z",
      "trx_complete_time": null,
      "operator": "admin",
      "part": "12"
    },
    {
      key: 5,
      "trx_id": 5,
      "username": "randomuser",
      "amount": "4.2000",
      "currency_id": 1,
      "bankname": "bankLMN",
      "iban": "777777777",
      "swift": "666666",
      "account_holder": "user4",
      "country": "uk",
      "status": "confirmed",
      "trx_init_time": "2021-08-25T12:30:15.456Z",
      "trx_complete_time": "2021-08-25T13:15:29.234Z",
      "operator": "testadmin",
      "part": "56"
    },
    {
      key: 6,
      "trx_id": 6,
      "username": "exampleuser",
      "amount": "-2.1000",
      "currency_id": 3,
      "bankname": "bankRST",
      "iban": "333333333",
      "swift": "222222",
      "account_holder": "user5",
      "country": "germany",
      "status": "pending",
      "trx_init_time": "2021-09-01T18:00:00.000Z",
      "trx_complete_time": null,
      "operator": "testoperator",
      "part": "78"
    },
    {
      key: 7,
      "trx_id": 7,
      "username": "user123",
      "amount": "6.7500",
      "currency_id": 1,
      "bankname": "bankJKL",
      "iban": "999999999",
      "swift": "888888",
      "account_holder": "user6",
      "country": "france",
      "status": "confirmed",
      "trx_init_time": "2021-09-08T09:45:30.987Z",
      "trx_complete_time": "2021-09-08T10:30:45.765Z",
      "operator": "admin",
      "part": "34"
    },
    {
      key: 8,
      "trx_id": 8,
      "username": "newuser",
      "amount": "-4.3000",
      "currency_id": 2,
      "bankname": "bankGHI",
      "iban": "444444444",
      "swift": "333333",
      "account_holder": "user7",
      "country": "spain",
      "status": "pending",
      "trx_init_time": "2021-09-15T14:15:22.345Z",
      "trx_complete_time": null,
      "operator": "testuser",
      "part": "90"
    },
    {
      key: 9,
      "trx_id": 9,
      "username": "john_doe",
      "amount": "3.0000",
      "currency_id": 3,
      "bankname": "bankUVW",
      "iban": "666666666",
      "swift": "555555",
      "account_holder": "john.doe",
      "country": "italy",
      "status": "confirmed",
      "trx_init_time": "2021-09-22T16:30:45.123Z",
      "trx_complete_time": "2021-09-22T17:15:59.901Z",
      "operator": "testadmin",
      "part": "45"
    },
    {
      key: 10,
      "trx_id": 10,
      "username": "jane_smith",
      "amount": "-2.5000",
      "currency_id": 1,
      "bankname": "bankXYZ",
      "iban": "111111111",
      "swift": "000000",
      "account_holder": "jane.smith",
      "country": "switzerland",
      "status": "pending",
      "trx_init_time": "2021-09-29T10:00:00.000Z",
      "trx_complete_time": null,
      "operator": "admin",
      "part": "67"
    },
    {
      key: 11,
      "trx_id": 11,
      "username": "user456",
      "amount": "5.8000",
      "currency_id": 2,
      "bankname": "bankABC",
      "iban": "123123123",
      "swift": "456456",
      "account_holder": "user8",
      "country": "netherlands",
      "status": "confirmed",
      "trx_init_time": "2021-10-06T12:45:30.789Z",
      "trx_complete_time": "2021-10-06T13:30:44.567Z",
      "operator": "testoperator",
      "part": "23"
    },
    {
      key: 12,
      "trx_id": 12,
      "username": "mary_jones",
      "amount": "-3.2000",
      "currency_id": 3,
      "bankname": "bankLMN",
      "iban": "777777777",
      "swift": "888888",
      "account_holder": "mary.jones",
      "country": "portugal",
      "status": "pending",
      "trx_init_time": "2021-10-13T14:15:22.345Z",
      "trx_complete_time": null,
      "operator": "testuser",
      "part": "89"
    },
    {
      key: 13,
      "trx_id": 13,
      "username": "sam_davis",
      "amount": "4.5000",
      "currency_id": 1,
      "bankname": "bankPQR",
      "iban": "555555555",
      "swift": "666666",
      "account_holder": "sam.davis",
      "country": "ireland",
      "status": "confirmed",
      "trx_init_time": "2021-10-20T16:30:45.123Z",
      "trx_complete_time": "2021-10-20T17:15:59.901Z",
      "operator": "testadmin",
      "part": "12"
    },
    {
      key: 14,
      "trx_id": 14,
      "username": "alex_wilson",
      "amount": "-1.8000",
      "currency_id": 2,
      "bankname": "bankRST",
      "iban": "333333333",
      "swift": "222222",
      "account_holder": "alex.wilson",
      "country": "germany",
      "status": "pending",
      "trx_init_time": "2021-10-27T10:00:00.000Z",
      "trx_complete_time": null,
      "operator": "testoperator",
      "part": "78"
    },
    {
      key: 15,
      "trx_id": 15,
      "username": "emma_roberts",
      "amount": "2.7500",
      "currency_id": 1,
      "bankname": "bankJKL",
      "iban": "999999999",
      "swift": "888888",
      "account_holder": "emma.roberts",
      "country": "france",
      "status": "confirmed",
      "trx_init_time": "2021-11-03T09:45:30.987Z",
      "trx_complete_time": "2021-11-03T10:30:45.765Z",
      "operator": "admin",
      "part": "34"
    },
    {
      key: 16,
      "trx_id": 16,
      "username": "michael_smith",
      "amount": "-2.3000",
      "currency_id": 3,
      "bankname": "bankGHI",
      "iban": "444444444",
      "swift": "333333",
      "account_holder": "michael.smith",
      "country": "spain",
      "status": "pending",
      "trx_init_time": "2021-11-10T14:15:22.345Z",
      "trx_complete_time": null,
      "operator": "testuser",
      "part": "90"
    },
    {
      key: 17,
      "trx_id": 17,
      "username": "olivia_martin",
      "amount": "3.2000",
      "currency_id": 2,
      "bankname": "bankUVW",
      "iban": "666666666",
      "swift": "555555",
      "account_holder": "olivia.martin",
      "country": "italy",
      "status": "confirmed",
      "trx_init_time": "2021-11-17T16:30:45.123Z",
      "trx_complete_time": "2021-11-17T17:15:59.901Z",
      "operator": "testadmin",
      "part": "45"
    },
    {
      key: 18,
      "trx_id": 18,
      "username": "jacob_anderson",
      "amount": "-4.5000",
      "currency_id": 1,
      "bankname": "bankXYZ",
      "iban": "111111111",
      "swift": "000000",
      "account_holder": "jacob.anderson",
      "country": "switzerland",
      "status": "pending",
      "trx_init_time": "2021-11-24T10:00:00.000Z",
      "trx_complete_time": null,
      "operator": "admin",
      "part": "67"
    },
    {
      key: 19,
      "trx_id": 19,
      "username": "grace_jones",
      "amount": "5.8000",
      "currency_id": 2,
      "bankname": "bankABC",
      "iban": "123123123",
      "swift": "456456",
      "account_holder": "grace.jones",
      "country": "netherlands",
      "status": "confirmed",
      "trx_init_time": "2021-12-01T12:45:30.789Z",
      "trx_complete_time": "2021-12-01T13:30:44.567Z",
      "operator": "testoperator",
      "part": "23"
    },
    {
      key: 20,
      "trx_id": 20,
      "username": "david_miller",
      "amount": "-3.2000",
      "currency_id": 3,
      "bankname": "bankLMN",
      "iban": "777777777",
      "swift": "888888",
      "account_holder": "david.miller",
      "country": "portugal",
      "status": "pending",
      "trx_init_time": "2021-12-08T14:15:22.345Z",
      "trx_complete_time": null,
      "operator": "testuser",
      "part": "89"
    },
    {
      key: 21,
      "trx_id": 21,
      "username": "lucas_smith",
      "amount": "4.5000",
      "currency_id": 1,
      "bankname": "bankPQR",
      "iban": "555555555",
      "swift": "666666",
      "account_holder": "lucas.smith",
      "country": "ireland",
      "status": "confirmed",
      "trx_init_time": "2021-12-15T16:30:45.123Z",
      "trx_complete_time": "2021-12-15T17:15:59.901Z",
      "operator": "testadmin",
      "part": "12"
    },
    {
      key: 22,
      "trx_id": 22,
      "username": "ella_wilson",
      "amount": "-1.8000",
      "currency_id": 2,
      "bankname": "bankRST",
      "iban": "333333333",
      "swift": "222222",
      "account_holder": "ella.wilson",
      "country": "germany",
      "status": "pending",
      "trx_init_time": "2021-12-22T10:00:00.000Z",
      "trx_complete_time": null,
      "operator": "testoperator",
      "part": "78"
    },
    {
      key: 23,
      "trx_id": 23,
      "username": "mila_roberts",
      "amount": "2.7500",
      "currency_id": 1,
      "bankname": "bankJKL",
      "iban": "999999999",
      "swift": "888888",
      "account_holder": "mila.roberts",
      "country": "france",
      "status": "confirmed",
      "trx_init_time": "2021-12-29T09:45:30.987Z",
      "trx_complete_time": "2021-12-29T10:30:45.765Z",
      "operator": "admin",
      "part": "34"
    },
    {
      key: 24,
      "trx_id": 24,
      "username": "william_smith",
      "amount": "-2.3000",
      "currency_id": 3,
      "bankname": "bankGHI",
      "iban": "444444444",
      "swift": "333333",
      "account_holder": "william.smith",
      "country": "spain",
      "status": "pending",
      "trx_init_time": "2022-01-05T14:15:22.345Z",
      "trx_complete_time": null,
      "operator": "testuser",
      "part": "90"
    },
    {
      key: 25,
      "trx_id": 25,
      "username": "mia_martin",
      "amount": "3.2000",
      "currency_id": 2,
      "bankname": "bankUVW",
      "iban": "666666666",
      "swift": "555555",
      "account_holder": "mia.martin",
      "country": "italy",
      "status": "confirmed",
      "trx_init_time": "2022-01-12T16:30:45.123Z",
      "trx_complete_time": "2022-01-12T17:15:59.901Z",
      "operator": "testadmin",
      "part": "45"
    },
    {
      key: 26,
      "trx_id": 26,
      "username": "ethan_anderson",
      "amount": "-4.5000",
      "currency_id": 1,
      "bankname": "bankXYZ",
      "iban": "111111111",
      "swift": "000000",
      "account_holder": "ethan.anderson",
      "country": "switzerland",
      "status": "pending",
      "trx_init_time": "2022-01-19T10:00:00.000Z",
      "trx_complete_time": null,
      "operator": "admin",
      "part": "67"
    },
    {
      key: 27,
      "trx_id": 27,
      "username": "amelia_jones",
      "amount": "5.8000",
      "currency_id": 2,
      "bankname": "bankABC",
      "iban": "123123123",
      "swift": "456456",
      "account_holder": "amelia.jones",
      "country": "netherlands",
      "status": "confirmed",
      "trx_init_time": "2022-01-26T12:45:30.789Z",
      "trx_complete_time": "2022-01-26T13:30:44.567Z",
      "operator": "testoperator",
      "part": "23"
    },
    {
      key: 28,
      "trx_id": 28,
      "username": "benjamin_miller",
      "amount": "-3.2000",
      "currency_id": 3,
      "bankname": "bankLMN",
      "iban": "777777777",
      "swift": "888888",
      "account_holder": "benjamin.miller",
      "country": "portugal",
      "status": "pending",
      "trx_init_time": "2022-02-02T14:15:22.345Z",
      "trx_complete_time": null,
      "operator": "testuser",
      "part": "89"
    },
    {
      key: 29,
      "trx_id": 29,
      "username": "olivia_davis",
      "amount": "4.5000",
      "currency_id": 1,
      "bankname": "bankPQR",
      "iban": "555555555",
      "swift": "666666",
      "account_holder": "olivia.davis",
      "country": "ireland",
      "status": "confirmed",
      "trx_init_time": "2022-02-09T16:30:45.123Z",
      "trx_complete_time": "2022-02-09T17:15:59.901Z",
      "operator": "testadmin",
      "part": "12"
    },
    {
      key: 30,
      "trx_id": 30,
      "username": "alexander_wilson",
      "amount": "-1.8000",
      "currency_id": 2,
      "bankname": "bankRST",
      "iban": "333333333",
      "swift": "222222",
      "account_holder": "alexander.wilson",
      "country": "germany",
      "status": "pending",
      "trx_init_time": "2022-02-16T10:00:00.000Z",
      "trx_complete_time": null,
      "operator": "testoperator",
      "part": "78"
    }
  ] 

  export default initialData;
  