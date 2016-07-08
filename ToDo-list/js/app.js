$(function() {
  'use strict';
  var todoList = {
    model: [],
    selectElements: function() {
      this.inputField = $('.task-form__text');
      this.form = $('.task-form');
      this.toDoList = $('.table__body');
      this.tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" data-index=":index" class="btn btn-danger">x</button></td></tr>';
    },
    getLength: function() {
      return this.model.length;
    },
    replaceTmpl: function(position, item) {
      return this.tmpl.replace(/:position/gi, position).replace(/:text/gi, item).replace(/:index/gi, position -1);
    },
    addItem: function(todoText) {
      var newTodo = { text: todoText };
      this.model.push(newTodo);
      this.addToLocal();
      this.renderItem(this.getLength(), newTodo);
    },
    renderItem: function(index, item) {
      this.toDoList.append(this.replaceTmpl(index, item.text));
    },
    removeItem: function(index) {
      this.model.splice(index, 1);
      this.addToLocal();
      this.renderList();
    },
    onFormSubmit: function(e) {
      e.preventDefault();
      if(this.inputField.val().replace(/\s+/g, '').length === 0) {
        return;
      }
      this.addItem(this.inputField.val());
      this.form.trigger('reset');
    },
    renderList: function() {
      var list = '',
          __self = this;
      $.each(this.model, function(index, item) {
        list += __self.replaceTmpl(index + 1, item.text);
      });
      this.toDoList.html(list);
    },
    addToLocal: function() {
      var str = JSON.stringify(this.model);
      localStorage.setItem('todos', str);
      console.log('ls updated');
    },
    getFromLocal: function() {
      var str = localStorage.getItem('todos');
      this.model = JSON.parse(str);
      if(!this.model) {
        this.model = [];
      }
    },
    init: function() {
      this.getFromLocal();
      var __self = this;
      this.selectElements();
      this.toDoList.on('click', '.btn-danger', function(e) {
        var index = $(e.target).data('index');
        __self.removeItem(index);
      });
      this.form.submit(function(e) {
        __self.onFormSubmit(e);
      });
      this.renderList();
    }
  };
  todoList.init();
});
