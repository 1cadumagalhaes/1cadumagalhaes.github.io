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

    $.each(skills, function(k,skill){
     var item = '<li>'
            +'<blockquote>'
             + '<p class="flow-text">'+skill.skill+'</p>'
              +'<div class="progress grey lighten-2">'
               + '<div class="determinate light-blue darken-4" style="width: '+skill.percentage+'"></div>'
              +'</div>'
            +'</blockquote>'
          +'</li>';
      items.push(item);
    });

    $("<ul/>", {
      html:items.join("")
    }).appendTo("#skills")

  });