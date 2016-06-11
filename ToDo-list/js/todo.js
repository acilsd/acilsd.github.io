$(function() {
  var ToDo = function() {
    this.model = [
      { text: 'Do something!'}
    ];
    this.inputField = $('.task-form__text');
    this.form = $('.task-form');
    this.toDoList = $('.table__body');
    this.init();
  };
  ToDo.prototype.getLength = function() {
    return this.model.length;
  };
//template
  ToDo.prototype.getItemHtml = function(position, item) {
    var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" data-index=":index" class="btn btn-danger">x</button></td></tr>';
    return tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position -1);
  };
//taking input value
  ToDo.prototype.onFormSubmit = function(e) {
    e.preventDefault();
    if(this.inputField.val().replace(/\s+/g, '').length === 0) {
      return;
	  }
    this.addItem(this.inputField.val());
    this.form.trigger('reset');
  };
//adding value
  ToDo.prototype.addItem = function(todoText) {
    var newTodo = { text: todoText };
    this.model.push(newTodo);
    this.renderItem(this.getLength(), newTodo);
  };
//adding an item with input value
  ToDo.prototype.renderItem = function(index, item) {
    this.toDoList.append(this.getItemHtml(index, item.text));
  };
  ToDo.prototype.renderList = function() {
    var list = '',
      __self = this;
    $.each(this.model, function(index, item) {
      list += __self.getItemHtml(index + 1, item.text);
    });
    this.toDoList.html(list);
  };
//delete an item
ToDo.prototype.removeItem = function(index) {
  this.model.splice(index, 1);
  this.renderList();
};
//initialize
  ToDo.prototype.init = function() {
    var __self = this;
    this.toDoList.on('click', '.btn-danger', function(e) {
      var index = $(e.target).data('index');
      __self.removeItem(index);
    });
    this.form.submit(function(e) {
      __self.onFormSubmit(e);
    });
    this.renderList();
  };
  window.todo = new ToDo();
});
