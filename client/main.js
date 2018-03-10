import { Template } from "meteor/templating";
import { Notes } from "../lib/collections";
import { Accounts } from "meteor/accounts-base";

import "./main.html";

// Accounts config
Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});

Template.body.helpers({
  notes() {
    return Notes.find({});
  }
});

// This event handling system is also a bit ugly
Template.note.events({
  "click .delete-note": function() {
    Meteor.call("notes.remove", this);
  }
});

Template.addNoteModal.events({
  "submit .add-form": function() {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Meteor.call("notes.insert", text);

    target.text.value = "";
    $("#addNoteModal").modal("close");
  }
});
