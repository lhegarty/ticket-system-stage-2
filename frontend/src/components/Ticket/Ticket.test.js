import React from "react";
import renderer from "react-test-renderer";

import { BrowserRouter as Router } from "react-router-dom";

import Ticket from "./Ticket";

it("renders without crashing", () => {
    const data = {
        id: 1,
        issueDescription: "Foo",
        ticketAuthor: "Mario",
        ticketStatus: "Mar",
        ticketTitle: "Moo",
        timestamp: "2021-04-01T14:22:49.624",
    };

    renderer.create(
        <Router>
            <Ticket data={data} />
        </Router>
    );
});
