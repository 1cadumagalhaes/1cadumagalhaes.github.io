$.getJSON('src/skills.json', function (data) {
  var items = [];
  var skills = [];

  $.each(data['skills'], function (key, v) {
    var skill = {
      "skill": v.skill,
      "percentage": v.percentage
    }
    skills.push(skill);
  });

  $.each(skills, function (k, skill) {
    var item = '<li class="col s12 l4">'
      + '<blockquote>'
      + '<p class="flow-text">' + skill.skill + '</p>'
      + '<div class="progress grey lighten-2">'
      + '<div class="determinate light-blue darken-4" style="width: ' + skill.percentage + '"></div>'
      + '</div>'
      + '</blockquote>'
      + '</li>';
    items.push(item);
  });

  $("<ul/>", {
    html: items.join("")
  }).appendTo("#skills")

});


$.getJSON('src/achievements.json', function (data) {
  var items = [];
  var achievements = [];

  $.each(data['achievements'], function (key, v) {
    var achievement = {
      "title": v.title,
      "subtitle": v.subtitle,
      "image": v.image,
      "url": v.url
    }
    achievements.push(achievement);
  });

  $.each(achievements, function (k, a) {
    var item = '<div class="col s12 m4 achiev carousel-item">'
      + '<div class="card">'
      + '<div class="card-image">'
      + ' <img src="' + a.image + '" alt="" class="img-card">'
      + '<a class="btn-floating halfway-fab waves-effect waves-light red" href="' + a.url + '" target="_blank"><i class="material-icons">add</i></a>'
      + '</div>'
      + '<div class="card-content">'
      + '<span class="card-title">' + a.title + '</span>'
      + '<p>' + a.subtitle + '</p>'
      + '</div>'
      + '</div>'
      + '</div>';

    items.push(item);
  });

  $('#achievements').html(items.join(""));

});

$.getJSON('src/projects.json', function (data) {
  var items = [];
  var projects = [];

  $.each(data['projects'], function (key, v) {
    var project = {
      "title": v.title,
      "subtitle": v.subtitle,
      "image": v.image,
      "url": v.url
    }
    projects.push(project);
  });

  $.each(projects, function (k, a) {
    var item = '<div class="col s12 m4 project carousel-item">'
      + '<div class="card">'
      + '<div class="card-image">'
      + ' <img src="' + a.image + '" alt="" class="img-card">'
      + '<a class="btn-floating halfway-fab waves-effect waves-light red" href="' + a.url + '" target="_blank"><i class="material-icons">add</i></a>'
      + '</div>'
      + '<div class="card-content">'
      + '<span class="card-title">' + a.title + '</span>'
      + '<p>' + a.subtitle + '</p>'
      + '</div>'
      + '</div>'
      + '</div>';

    items.push(item);
  });
  $('#projects').html(items.join(""));
});
