import { Template } from "meteor/templating";
import { Notes } from "../lib/collections";

import "./main.html";

Template.body.helpers({
  notes() {
    return Notes.find({});
  }
});

// This event handling system is also a bit ugly
Template.note.events({
  "click .delete-note": function() {
    Notes.remove(this._id);
  }
});

Template.addNoteModal.events({
  "submit .add-form": function() {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Notes.insert({
      text,
      createdAt: new Date()
    });

    target.text.value = "";
    $("#addNoteModal").close();
  }
});
