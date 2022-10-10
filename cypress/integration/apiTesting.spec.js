///<reference types="cypress"/>



describe("fast api testing", function () {

    it("TC-01 validate ROOT get api with message", function () {
        cy.request({
            method: "GET",
            url: "http://127.0.0.1:8000/"

        }).then(function ({ body, status }) {
            expect(status).to.eql(200)
            expect(body.message).to.eql("Fast API in Python")
        })

    })

    it("TC-02 validate get api for user", function () {
        cy.request({
            method: "GET",
            url: "http://127.0.0.1:8000/user"

        }).then(function ({ status, body, headers, duration }) {
            expect(status).to.eql(200)
            expect(body.length).to.eql(2)
            body.forEach((el) => {
                expect(el).to.have.keys("id", "name", "mail", "phone")
            })
            expect(headers).to.have.property('content-length', '153')
            expect(headers).to.have.property('content-type', 'application/json')
            expect(headers).to.have.property('server', 'uvicorn')
            expect(duration).to.be.within(1, 25)
        })

    })


    it("TC-03 validate get api with question", function () {
        cy.request({
            method: "GET",
            url: "http://127.0.0.1:8000/question/1"

        }).then(function (res) {
            expect(res.status).to.eql(200)
            expect(res.body).to.have.keys("id", "position", "question")
            expect(res.body.id).to.eql(1)
            expect(res.body.position).to.eql(1)
            expect(res.body.question).to.eql("Which car model/category are you looking for?")
            expect(res.headers).to.have.property('content-length', '80')
            expect(res.headers).to.have.property('content-type', 'application/json')
            expect(res.headers).to.have.property('server', 'uvicorn')
            expect(res.duration).to.be.within(1, 50)
        })

    })

    it("TC-04 validate get api with alternative question_id", function () {
        cy.request({
            method: "GET",
            url: "http://127.0.0.1:8000/alternatives/1"

        }).then(function (res) {
            expect(res.status).to.eql(200)
            expect(res.body.length).to.eql(4)

            res.body.forEach(function (el) {
                expect(el).to.have.keys("id", "question_id", "alternative")
            })
            expect(res.body[0].alternative).to.eql("compact")
            expect(res.body[1].alternative).to.eql("utilitary")
            expect(res.body[2].alternative).to.eql("sporting")
            expect(res.body[3].alternative).to.eql("suv")
            res.body.forEach(element => {
                expect(element.question_id).to.eql(1)

            })
            expect(res.headers).to.have.property('content-length', '196')
            expect(res.headers).to.have.property('content-type', 'application/json')
            expect(res.headers).to.have.property('server', 'uvicorn')
            expect(res.duration).to.be.within(1, 50)
        })
    })


    it("TC-05 validate POST api", function () {
        cy.request({
            method: "POST",
            url: "http://127.0.0.1:8000/answer",
            failOnStatusCode: false,
            body:
            {
                "user_id": 0,
                "answers": [
                    {
                        "question_id": 0,
                        "alternative_id": 0
                    }
                ]
            }
        }).then(function (res) {
        expect(res.status).to.eql(500)
        expect(res.statusText).to.eql("Internal Server Error")
        })
    })

    it("TC-06 validate get api with result", function () {
        cy.request({
            method: "GET",
            url: "http://127.0.0.1:8000/result/2"

        }).then(function (response) {
            //cy.log(res)
            expect(response.status).to.eql(200)
            expect(response.statusText).to.eql("OK")
            expect(response.body.length).to.eql(2)
            response.body.forEach(function (el) {
                expect(el).to.have.keys("id", "name", "fuel", "price", "category", "link")
            })
            expect(response.body[0]).to.have.keys("id", "name", "fuel", "price", "category", "link")
            expect(response.body[1]).to.have.keys("id", "name", "fuel", "price", "category", "link")

            expect(response.duration).to.be.within(1, 50)
        })
    })

})






