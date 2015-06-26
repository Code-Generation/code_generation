
window.addEventListener("keydown", function(e) {
    // arrow keys
    if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


var main = document.getElementById('main_editor');
var editor_one = document.getElementById('editor_one');
var editor_two = document.getElementById('editor_two');
var editor_three = document.getElementById('editor_three');

if(localStorage.getItem('main_editor')) {

  if(localStorage.getItem('main_editor') == "html_editor") {
    main.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('main_editor') == "css_editor") {
    main.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('main_editor') == "js_editor") {
    main.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScriptButtonPressed()">Evaluate<\/button>';
  } else if(localStorage.getItem('main_editor') == "terminal") {
    main.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    main.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  }

} else {

  main.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  localStorage.setItem('main_editor', 'terminal');

}

if(localStorage.getItem('editor_one')) {

  if(localStorage.getItem('editor_one') == "html_editor") {
    editor_one.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('editor_one') == "css_editor") {
    editor_one.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('editor_one') == "js_editor") {
    editor_one.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScriptButtonPressed()">Evaluate<\/button>';
  } else if(localStorage.getItem('editor_one') == "terminal") {
    editor_one.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    editor_one.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  }
} else {

  editor_one.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  localStorage.setItem('editor_one', 'html');

}

if(localStorage.getItem('editor_two')) {

  if(localStorage.getItem('editor_two') == "html_editor") {
    editor_two.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('editor_two') == "css_editor") {
    editor_two.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('editor_two') == "js_editor") {
    editor_two.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScriptButtonPressed()">Evaluate<\/button>';
  } else if(localStorage.getItem('editor_two') == "terminal") {
    editor_two.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    editor_two.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  }

} else {

  editor_two.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  localStorage.setItem('editor_two', 'css');

}

if(localStorage.getItem('editor_three')) {

  if(localStorage.getItem('editor_three') == "html_editor") {
    editor_three.innerHTML = '<h5>HTML<\/h5><div id="html_editor"><\/div>';
  } else if(localStorage.getItem('editor_three') == "css_editor") {
    editor_three.innerHTML = '<h5>CSS<\/h5><div id="css_editor"><\/div>';
  } else if(localStorage.getItem('editor_three') == "js_editor") {
    editor_three.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScriptButtonPressed()">Evaluate<\/button>';
  } else if(localStorage.getItem('editor_three') == "terminal") {
    editor_three.innerHTML = '<h5>Terminal<\/h5><div id="terminal"><\/div>';
  } else {
    editor_three.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScriptButtonPressed()">Evaluate<\/button>';
  }
} else {

  editor_three.innerHTML = '<h5>JavaScript<\/h5><div id="js_editor"><\/div><button class="pull-right btn-sm btn-primary" onclick="runScriptButtonPressed()">Evaluate<\/button>';
  localStorage.setItem('editor_three', 'js');

}

main.children[1].style.height = "360px";
editor_one.children[1].style.height = "250px";
editor_two.children[1].style.height = "250px";
editor_three.children[1].style.height = "250px";

function goToMain(id) {
  editor_to_main = document.getElementById(id);
  main_to_editor = document.getElementById('main_editor').children[1].id;

  localStorage.setItem(editor_to_main.id, main_to_editor);
  localStorage.setItem("main_editor", editor_to_main.children[1].id);

  location.reload();
}

var store = [];
var oldf = console.log;

console.log = function() {
  store.push(arguments)
  for(var i = 0; i < arguments.length; i++) {
    var new_log = "<p>"
    if(typeof arguments[i] == 'object') {
      new_log += JSON.stringify(arguments[i], null, 4);
    } else {
      new_log += arguments[i];
    }
    new_log += "<\/p>";
    var terminal = document.getElementById('terminal');
    terminal.innerHTML = new_log + terminal.innerHTML;
  }
  oldf.apply(console, arguments);
}

var html_editor = ace.edit("html_editor");
html_editor.setTheme("ace/theme/monokai");
html_editor.getSession().setMode("ace/mode/html");
html_editor.getSession().setValue(localStorage.getItem("html"));
html_editor.getSession().setUseWrapMode(true);

var html = document.getElementById('html');
var html_value = html_editor.getSession().getValue();
html.innerHTML = html_value;

var css_editor  = ace.edit("css_editor");
css_editor.setTheme("ace/theme/github");
css_editor.getSession().setMode("ace/mode/css");
css_editor.getSession().setValue(localStorage.getItem("css"));
css_editor.getSession().setUseWrapMode(true);

var css = document.getElementById('css');
var css_value = css_editor.getSession().getValue();
css.innerHTML = css_value;

var js_editor = ace.edit("js_editor");
js_editor.setTheme("ace/theme/solarized_light");
js_editor.getSession().setMode("ace/mode/javascript");
js_editor.getSession().setValue(localStorage.getItem("js"));
js_editor.getSession().setUseWrapMode(true);
runScript();

html_editor.on('change', function() {
  var html = document.getElementById('html');
  var html_value = html_editor.getSession().getValue();
  html.innerHTML = html_value;
  localStorage.setItem("html", html_value);
})

css_editor.on('change', function() {
  var css = document.getElementById('css');
  var css_value = css_editor.getSession().getValue();
  css.innerHTML = css_value;
  localStorage.setItem("css", css_value);
})

js_editor.on('change', function() {
  var js_value = js_editor.getSession().getValue();
  localStorage.setItem("js", js_value);
  console.dir(localStorage.getItem("js"));
})

function runScriptButtonPressed() {
  location.reload();
  runScript();
}

function runScript() {
  document.onkeydown = null
  var terminal = document.getElementById('terminal');
  terminal.innerHTML = "";
  try {
    eval(js_editor.getSession().getValue())
  } catch (e) {
    terminal.innerHTML += "<p class='error'>error<\/p>";
  }
}

function constructPage() {
  var html_str = "<style scoped>";
  html_str += css_editor.getSession().getValue();
  html_str += "<\/style>";
  html_str += html_editor.getSession().getValue();
  html_str += "<script>";
  html_str += js_editor.getSession().getValue();
  html_str += "<\/script>";
  $('#code').val(html_str)
  // return html_str;
}

function clearEditor() {
  localStorage.setItem("project_name", "Project Name");
  localStorage.setItem("html", "");
  localStorage.setItem("css", "");
  localStorage.setItem("js", "");
  js_editor.getSession().setValue(localStorage.getItem("js"));
  html_editor.getSession().setValue(localStorage.getItem("html"));
  css_editor.getSession().setValue(localStorage.getItem("css"));
  $('#project_name').val("Project Name");
}

function submitForm(){
  $('#save_project_form').trigger('submit');
}

var alert_messages_block = document.getElementById('alert_messages_block');
alert_messages_block.innerHTML = "";

$(document).ready(function(){
  if(localStorage.getItem('project_name')) {
    $('#project_name').val(localStorage.getItem('project_name'));
  }

  $('#project_name').on('change',function(){
    localStorage.setItem("project_name", $(this).val());
  })

  $('#save_project_form').on('submit', function(){
    constructPage();
    var form = $(this);
    var form_data = form.serialize();
    $('#alert_messages_block').html('');
    
    $.post(form.attr('action'), form_data, function(data){
      if(data.status == true){
        $('#alert_messages_block').html('<p class="alert alert-success">Project saved. Visit your output using this link <a href="'+ data.project_url +'" class="project_link">'+ data.project_url +'</a>.</p>');
        // clearEditor();
      }
      else
        $('#alert_messages_block').html('<p class="alert alert-danger">'+ data.error_messages +'</p>');
    },'json');
    return false;
  })
})