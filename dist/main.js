(function(){"use strict";var __webpack_modules__={755:function(){eval('\n;// CONCATENATED MODULE: ./src/script/player.js\n//const maxLife = 3;\n\nclass PlayerObj {\n  constructor() {\n    this.x = 200;\n    this.y = 300;\n    this.width = 40;\n    this.height = 40;\n    this.speed = 150;\n    this.life = 3;\n    this.stair = 0;\n    this.state = 0;\n    this.color = \'#FF8000\';\n  }\n}\n/* harmony default export */ var player = (PlayerObj);\n;// CONCATENATED MODULE: ./src/script/block.js\nclass BlockObj {\n  constructor(a, b) {\n    this.x = a;\n    this.y = b;\n    this.width = 150;\n    this.height = 30;\n    this.mod = 0;\n    this.color = \'#198e99\';\n  }\n}\n/* harmony default export */ var block = (BlockObj);\n;// CONCATENATED MODULE: ./src/script/j_Block.js\nclass J_BlockObj {\n  constructor(a, b) {\n    this.x = a;\n    this.y = b;\n    this.width = 130;\n    this.height = 30;\n    this.mod = 3;\n    this.color = \'#FFFF00\';\n  }\n}\n;\n/* harmony default export */ var j_Block = (J_BlockObj);\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\n//--------param\nconst statusSt = \'Start\';\nconst bgpic = new Image();\nbgpic.src = "./assets/bg.jpg";\nconst toppic = new Image();\ntoppic.src = "./assets/top.jpg";\nconst stand = new Image();\nstand.src = "./assets/1.png";\nconst blockPic = new Image();\nblockPic.src = "./assets/block.jpg";\nconst j_blockPic = new Image();\nj_blockPic.src = "./assets/jblock.jpg";\nconst leftpic = new Image();\nleftpic.src = "./assets/left.png";\nconst rightpic = new Image();\nrightpic.src = "./assets/right.png";\nlet canvasB, ctxB, canvasM, ctxM;\nlet gameStatus = statusSt;\nlet src_player = new player();\nlet keysDown = {};\nlet speed = 7;\nlet up = 0,\n  up2 = 0;\nlet down = 1,\n  down2 = 1;\nlet m_y = 0,\n  m_y2 = 0,\n  flag3 = 0;\nlet ms = 250;\n//-------------------------\nfunction render() {\n  canvasB = document.getElementById(\'canvasBoard\');\n  ctxB = canvasB.getContext(\'2d\');\n  canvasM = document.getElementById(\'canvasMove\');\n  ctxM = canvasM.getContext(\'2d\');\n  canvasB.width = 480;\n  canvasB.height = 740;\n  canvasM.width = 480;\n  canvasM.height = 300;\n  window.addEventListener(\'keydown\', function (e) {\n    keysDown[e.keyCode] = true;\n  });\n  window.addEventListener(\'keyup\', function (e) {\n    delete keysDown[e.keyCode];\n  });\n  /////move by touch\n  canvasB.addEventListener("touchstart", function (e) {\n    touches = e.touches[0];\n    tou = 1;\n  });\n  canvasB.addEventListener("touchmove", function (e) {\n    var t = e.touches[0];\n    if (t.pageX < touches.pageX && src_player.x > 0 && src_player.x < 560) {\n      src_player.x -= src_player.speed * 0.015;\n      src_player.state = 1;\n      if (src_player.x <= 0) src_player.x = 1;\n    } else if (t.pageX > touches.pageX && src_player.x > 0 && src_player.x < 560) {\n      src_player.x += src_player.speed * 0.015;\n      src_player.state = 2;\n      if (src_player.x >= 560) src_player.x = canvasB.width - 41;\n    } else src_player.state = 0;\n    //alert(touches.pageX);\n  });\n  if (gameStatus == statusSt) {\n    ctxB.drawImage(bgpic, 0, 0, canvasB.width, canvasB.height);\n    if (src_player.state == 0) ctxB.drawImage(stand, src_player.x, src_player.y, src_player.width, src_player.height);else if (src_player.state == 1) {\n      ctxB.drawImage(leftpic, a, 0, src_player.width, src_player.height, src_player.x, src_player.y, src_player.width, src_player.height);\n      a += 50;\n      if (a >= 200) a = 0;\n    } else if (src_player.state == 2) {\n      ctxB.drawImage(rightpic, b, 0, src_player.width, src_player.height, src_player.x, src_player.y, src_player.width, src_player.height);\n      b += 50;\n      if (b >= 200) b = 0;\n    }\n    ctxB.drawImage(toppic, 0, 0, canvasB.width, 40);\n    for (let i = 0; i < 10; i++) {\n      if (src_Array[i].mod == 0) ctxB.drawImage(blockPic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 1) ctxB.drawImage(spic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 2) ctxB.drawImage(kpic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 3) ctxB.drawImage(j_blockPic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else {\n        ctxB.fillStyle = src_Array[i].color;\n        ctxB.fillRect(src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);\n      }\n    }\n  }\n}\nfunction update(mod) {\n  // if(game == 1){\n  if (37 in keysDown && src_player.x >= 0 && src_player.x < canvas.width - 40) {\n    src_player.x -= src_player.speed * mod;\n    src_player.state = 1;\n    if (src_player.x <= 0) src_player.x = 1;\n  } else if (39 in keysDown && src_player.x >= 0 && src_player.x < canvas.width - 40) {\n    src_player.x += src_player.speed * mod;\n    src_player.state = 2;\n    if (src_player.x >= canvas.width - 40) src_player.x = canvas.width - 41;\n  }\n  for (let i = 0; i < 10; i++) {\n    src_Array[i].y -= speed;\n  }\n  for (let i = 0; i < 10; i++) {\n    if (src_player.y <= src_Array[i].y && src_player.y >= src_Array[i].y - 40 && src_player.x > src_Array[i].x - 20 && src_player.x < src_Array[i].x + 150) {\n      up = 1;\n      m_y = i;\n      break;\n    } else up = 0;\n  }\n  if (up == 1) {\n    src_player.y = src_Array[m_y].y - 40;\n    if (src_Array[m_y].mod == 1) {\n      // if(flag == 0 &&player.life< fulllife ) player.life++;\n      // flag = 1;\n      src_player.speed = ms / 3;\n    } else if (src_Array[m_y].mod == 2) {\n      // if(flag == 0)player.life -= 5;\n      // flag = 1;\n      src_player.speed = ms;\n    } else if (src_Array[m_y].mod == 3) {\n      // if(flag == 0 &&player.life< fulllife ) player.life++;\n      src_player.speed = ms * 1.5;\n      src_player.y -= 100;\n      // flag = 1;\n    } else {\n      // if(flag == 0 &&player.life< fulllife ) player.life++;\n      src_player.speed = ms;\n      // flag = 1;\n    }\n  } else {\n    if (src_player.y < 35) {\n      src_player.life -= 5;\n      src_player.y = 35;\n    }\n    src_player.y += 10;\n    src_player.speed = ms;\n    // flag = 0;\n  }\n  // if(player.y > canvas.height || player.life <=0) {\n  //     game = 0;\n  //     end = 1;\n  // }\n  //console.log(flag+"  "+player.life + "   " + player.speed);\n  if (src_player.stair > 95) speed = 15;else if (src_player.stair > 80) speed = 14;else if (src_player.stair > 65) speed = 12;else if (src_player.stair > 50) speed = 10;else if (src_player.stair > 35) speed = 9;else if (src_player.stair > 20) speed = 8;\n  for (let i = 0; i < 10; i++) {\n    if (src_Array[i].y <= 30) {\n      src_Array[i].y = canvas.height + (Math.random() * 10 + 1) * (Math.random() * 50 + 50) + 200;\n      src_Array[i].x = Math.random() * canvas.width - 100;\n      /// Avoid Overlapping\n      while (1) {\n        src_Array[i].y = canvas.height + (Math.random() * 10 + 1) * (Math.random() * 50 + 50) + 200;\n        src_Array[i].x = Math.random() * canvas.width - 100;\n        var overlap = false;\n        for (j = 0; j < 10; j++) {\n          if (i == j) continue;\n          if (Math.abs(src_Array[i].x - src_Array[j].x) <= 200 && Math.abs(src_Array[i].y - src_Array[j].y) <= 60) {\n            overlap = true;\n            //console.log("overlap!");\n            break;\n          }\n        }\n        //console.log(overlap);\n        if (!overlap) break;\n      }\n      /////////////////////////////////////\n    }\n  }\n  //}\n}\nfunction run() {\n  update((Date.now() - time) / 1000);\n  render();\n  time = Date.now();\n}\nvar time = Date.now();\nsetInterval(run, 40);\nlet src_Array = [];\nsrc_Array[0] = new block(150, 600);\nfor (let i = 1; i < 10; i++) {\n  // let r = Math.random() * canvasB.width-100;\n  let r = Math.random() * 380;\n  let de = (Math.random() * 10 + 10 + i * 4) * 40;\n  /// Avoid Overlapping\n  while (1) {\n    // r = Math.random() * canvasB.width-100;\n    r = Math.random() * 380;\n    de = (Math.random() * 10 + 10 + i * 4) * 40;\n    let overlap = false;\n    for (let j = 0; j < i; j++) {\n      if (i == j) continue;\n      if (Math.abs(r - src_Array[j].x) <= 200 && Math.abs(de - src_Array[j].y) <= 60) {\n        overlap = true;\n        //console.log("overlap!");\n        break;\n      }\n    }\n    if (!overlap) break;\n  }\n  /////////////////////////////////////\n  if (i == 3 || i == 9) src_Array[i] = new block(r, de);else if (i == 2 || i == 7) src_Array[i] = new block(r, de);else if (i == 5) src_Array[i] = new j_Block(r, de);else src_Array[i] = new block(r, de);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzU1LmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsTUFBTUEsU0FBUztFQUVYQyxXQUFXQSxDQUFBLEVBQUc7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBRyxHQUFHO0lBQ1osSUFBSSxDQUFDQyxDQUFDLEdBQUUsR0FBRztJQUNYLElBQUksQ0FBQ0MsS0FBSyxHQUFFLEVBQUU7SUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBRSxFQUFFO0lBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUUsR0FBRztJQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFFLENBQUM7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBQyxDQUFDO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUMsQ0FBQztJQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFFLFNBQVM7RUFDekI7QUFDSjtBQUVBLDJDQUFlVixTQUFTLEU7O0FDakJ4QixNQUFNVyxRQUFRO0VBRVZWLFdBQVdBLENBQUNXLENBQUMsRUFBQ0MsQ0FBQyxFQUFFO0lBQ2IsSUFBSSxDQUFDWCxDQUFDLEdBQUVVLENBQUM7SUFDVCxJQUFJLENBQUNULENBQUMsR0FBRVUsQ0FBQztJQUNULElBQUksQ0FBQ1QsS0FBSyxHQUFFLEdBQUc7SUFDZixJQUFJLENBQUNDLE1BQU0sR0FBRSxFQUFFO0lBQ2YsSUFBSSxDQUFDUyxHQUFHLEdBQUcsQ0FBQztJQUNaLElBQUksQ0FBQ0osS0FBSyxHQUFHLFNBQVM7RUFDMUI7QUFDSjtBQUVBLDBDQUFlQyxRQUFRLEU7O0FDWnZCLE1BQU1JLFVBQVU7RUFDWmQsV0FBV0EsQ0FBQ1csQ0FBQyxFQUFDQyxDQUFDLEVBQUU7SUFDYixJQUFJLENBQUNYLENBQUMsR0FBRVUsQ0FBQztJQUNULElBQUksQ0FBQ1QsQ0FBQyxHQUFFVSxDQUFDO0lBQ1QsSUFBSSxDQUFDVCxLQUFLLEdBQUUsR0FBRztJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFFLEVBQUU7SUFDZixJQUFJLENBQUNTLEdBQUcsR0FBRyxDQUFDO0lBQ1osSUFBSSxDQUFDSixLQUFLLEdBQUcsU0FBUztFQUMxQjtBQUNKO0FBQUM7QUFFRCw0Q0FBZUssVUFBVSxFOztBQ1hpQjtBQUNEO0FBQ0k7QUFDQTs7QUFFN0M7QUFDQSxNQUFNRSxRQUFRLEdBQUcsT0FBTztBQUV4QixNQUFNQyxLQUFLLEdBQUMsSUFBSUMsS0FBSyxDQUFDLENBQUM7QUFDckJELEtBQUssQ0FBQ0UsR0FBRyxHQUFDLGlCQUFpQjtBQUM3QixNQUFNQyxNQUFNLEdBQUMsSUFBSUYsS0FBSyxDQUFDLENBQUM7QUFDckJFLE1BQU0sQ0FBQ0QsR0FBRyxHQUFDLGtCQUFrQjtBQUNoQyxNQUFNRSxLQUFLLEdBQUMsSUFBSUgsS0FBSyxDQUFDLENBQUM7QUFDcEJHLEtBQUssQ0FBQ0YsR0FBRyxHQUFDLGdCQUFnQjtBQUM3QixNQUFNRyxRQUFRLEdBQUMsSUFBSUosS0FBSyxDQUFDLENBQUM7QUFDeEJJLFFBQVEsQ0FBQ0gsR0FBRyxHQUFDLG9CQUFvQjtBQUNuQyxNQUFNSSxVQUFVLEdBQUMsSUFBSUwsS0FBSyxDQUFDLENBQUM7QUFDMUJLLFVBQVUsQ0FBQ0osR0FBRyxHQUFDLHFCQUFxQjtBQUN0QyxNQUFNSyxPQUFPLEdBQUMsSUFBSU4sS0FBSyxDQUFDLENBQUM7QUFDdkJNLE9BQU8sQ0FBQ0wsR0FBRyxHQUFDLG1CQUFtQjtBQUNqQyxNQUFNTSxRQUFRLEdBQUMsSUFBSVAsS0FBSyxDQUFDLENBQUM7QUFDeEJPLFFBQVEsQ0FBQ04sR0FBRyxHQUFDLG9CQUFvQjtBQUNuQyxJQUFJTyxPQUFPLEVBQUNDLElBQUksRUFBQ0MsT0FBTyxFQUFDQyxJQUFJO0FBRTdCLElBQUlDLFVBQVUsR0FBR2QsUUFBUTtBQUN6QixJQUFJZSxVQUFNLEdBQUcsSUFBSWhDLE1BQVMsQ0FBQyxDQUFDO0FBQzVCLElBQUlpQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLElBQUkzQixLQUFLLEdBQUcsQ0FBQztBQUNiLElBQUk0QixFQUFFLEdBQUcsQ0FBQztFQUFDQyxHQUFHLEdBQUMsQ0FBQztBQUNoQixJQUFJQyxJQUFJLEdBQUcsQ0FBQztFQUFDQyxLQUFLLEdBQUcsQ0FBQztBQUN0QixJQUFJQyxHQUFHLEdBQUcsQ0FBQztFQUFDQyxJQUFJLEdBQUcsQ0FBQztFQUFDQyxLQUFLLEdBQUcsQ0FBQztBQUM5QixJQUFJQyxFQUFFLEdBQUcsR0FBRztBQUNaO0FBQ0EsU0FBU0MsTUFBTUEsQ0FBQSxFQUFHO0VBQ2RmLE9BQU8sR0FBR2dCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUNoRGhCLElBQUksR0FBR0QsT0FBTyxDQUFDa0IsVUFBVSxDQUFDLElBQUksQ0FBQztFQUMvQmhCLE9BQU8sR0FBR2MsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQy9DZCxJQUFJLEdBQUdELE9BQU8sQ0FBQ2dCLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDL0JsQixPQUFPLENBQUN2QixLQUFLLEdBQUcsR0FBRztFQUNuQnVCLE9BQU8sQ0FBQ3RCLE1BQU0sR0FBRyxHQUFHO0VBQ3BCd0IsT0FBTyxDQUFDekIsS0FBSyxHQUFHLEdBQUc7RUFDbkJ5QixPQUFPLENBQUN4QixNQUFNLEdBQUcsR0FBRztFQUdwQnlDLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQVNDLENBQUMsRUFBRTtJQUMzQ2YsUUFBUSxDQUFDZSxDQUFDLENBQUNDLE9BQU8sQ0FBQyxHQUFHLElBQUk7RUFDOUIsQ0FBQyxDQUFDO0VBQ0ZILE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVNDLENBQUMsRUFBRTtJQUN6QyxPQUFPZixRQUFRLENBQUNlLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO0VBQzlCLENBQUMsQ0FBQztFQUNGO0VBQ0F0QixPQUFPLENBQUNvQixnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO0lBQzVDRSxPQUFPLEdBQUdGLENBQUMsQ0FBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0QkMsR0FBRyxHQUFHLENBQUM7RUFDWCxDQUFDLENBQUM7RUFDTnhCLE9BQU8sQ0FBQ29CLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFVQyxDQUFDLEVBQUU7SUFDM0MsSUFBSUksQ0FBQyxHQUFHSixDQUFDLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEIsSUFBSUUsQ0FBQyxDQUFDQyxLQUFLLEdBQUdILE9BQU8sQ0FBQ0csS0FBSyxJQUFJckIsVUFBTSxDQUFDOUIsQ0FBQyxHQUFHLENBQUMsSUFBSThCLFVBQU0sQ0FBQzlCLENBQUMsR0FBRyxHQUFHLEVBQUU7TUFDM0Q4QixVQUFNLENBQUM5QixDQUFDLElBQUk4QixVQUFNLENBQUMxQixLQUFLLEdBQUcsS0FBSztNQUNoQzBCLFVBQU0sQ0FBQ3ZCLEtBQUssR0FBRyxDQUFDO01BQ2hCLElBQUd1QixVQUFNLENBQUM5QixDQUFDLElBQUksQ0FBQyxFQUFFOEIsVUFBTSxDQUFDOUIsQ0FBQyxHQUFHLENBQUM7SUFDbEMsQ0FBQyxNQUNJLElBQUlrRCxDQUFDLENBQUNDLEtBQUssR0FBR0gsT0FBTyxDQUFDRyxLQUFLLElBQUlyQixVQUFNLENBQUM5QixDQUFDLEdBQUcsQ0FBQyxJQUFJOEIsVUFBTSxDQUFDOUIsQ0FBQyxHQUFHLEdBQUcsRUFBRTtNQUNoRThCLFVBQU0sQ0FBQzlCLENBQUMsSUFBSThCLFVBQU0sQ0FBQzFCLEtBQUssR0FBRyxLQUFLO01BQ2hDMEIsVUFBTSxDQUFDdkIsS0FBSyxHQUFHLENBQUM7TUFDaEIsSUFBR3VCLFVBQU0sQ0FBQzlCLENBQUMsSUFBSSxHQUFHLEVBQUU4QixVQUFNLENBQUM5QixDQUFDLEdBQUd5QixPQUFPLENBQUN2QixLQUFLLEdBQUMsRUFBRTtJQUNuRCxDQUFDLE1BQUs0QixVQUFNLENBQUN2QixLQUFLLEdBQUcsQ0FBQztJQUN0QjtFQUNKLENBQUMsQ0FBQztFQUVOLElBQUdzQixVQUFVLElBQUlkLFFBQVEsRUFBRTtJQUN2QlcsSUFBSSxDQUFDMEIsU0FBUyxDQUFDcEMsS0FBSyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUNTLE9BQU8sQ0FBQ3ZCLEtBQUssRUFBQ3VCLE9BQU8sQ0FBQ3RCLE1BQU0sQ0FBQztJQUN0RCxJQUFHMkIsVUFBTSxDQUFDdkIsS0FBSyxJQUFJLENBQUMsRUFDaEJtQixJQUFJLENBQUMwQixTQUFTLENBQUNoQyxLQUFLLEVBQUNVLFVBQU0sQ0FBQzlCLENBQUMsRUFBQzhCLFVBQU0sQ0FBQzdCLENBQUMsRUFBQzZCLFVBQU0sQ0FBQzVCLEtBQUssRUFBQzRCLFVBQU0sQ0FBQzNCLE1BQU0sQ0FBQyxDQUFDLEtBQ2xFLElBQUcyQixVQUFNLENBQUN2QixLQUFLLElBQUksQ0FBQyxFQUFDO01BQ3RCbUIsSUFBSSxDQUFDMEIsU0FBUyxDQUFDN0IsT0FBTyxFQUFDYixDQUFDLEVBQUMsQ0FBQyxFQUFDb0IsVUFBTSxDQUFDNUIsS0FBSyxFQUFDNEIsVUFBTSxDQUFDM0IsTUFBTSxFQUFDMkIsVUFBTSxDQUFDOUIsQ0FBQyxFQUFDOEIsVUFBTSxDQUFDN0IsQ0FBQyxFQUFDNkIsVUFBTSxDQUFDNUIsS0FBSyxFQUFDNEIsVUFBTSxDQUFDM0IsTUFBTSxDQUFDO01BQ25HTyxDQUFDLElBQUUsRUFBRTtNQUNMLElBQUdBLENBQUMsSUFBSSxHQUFHLEVBQUVBLENBQUMsR0FBRSxDQUFDO0lBQ3JCLENBQUMsTUFDSSxJQUFHb0IsVUFBTSxDQUFDdkIsS0FBSyxJQUFJLENBQUMsRUFBQztNQUN0Qm1CLElBQUksQ0FBQzBCLFNBQVMsQ0FBQzVCLFFBQVEsRUFBQ2IsQ0FBQyxFQUFDLENBQUMsRUFBQ21CLFVBQU0sQ0FBQzVCLEtBQUssRUFBQzRCLFVBQU0sQ0FBQzNCLE1BQU0sRUFBQzJCLFVBQU0sQ0FBQzlCLENBQUMsRUFBQzhCLFVBQU0sQ0FBQzdCLENBQUMsRUFBQzZCLFVBQU0sQ0FBQzVCLEtBQUssRUFBQzRCLFVBQU0sQ0FBQzNCLE1BQU0sQ0FBQztNQUNwR1EsQ0FBQyxJQUFHLEVBQUU7TUFDTixJQUFHQSxDQUFDLElBQUksR0FBRyxFQUFFQSxDQUFDLEdBQUUsQ0FBQztJQUNyQjtJQUNBZSxJQUFJLENBQUMwQixTQUFTLENBQUNqQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQ00sT0FBTyxDQUFDdkIsS0FBSyxFQUFDLEVBQUUsQ0FBQztJQUMzQyxLQUFJLElBQUltRCxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUcsRUFBRSxFQUFHQSxDQUFDLEVBQUUsRUFBQztNQUN6QixJQUFHQyxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDekMsR0FBRyxJQUFJLENBQUMsRUFBRWMsSUFBSSxDQUFDMEIsU0FBUyxDQUFDL0IsUUFBUSxFQUFDaUMsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3JELENBQUMsRUFBRXNELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNwRCxDQUFDLEVBQUVxRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDbkQsS0FBSyxFQUFFb0QsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ2xELE1BQU0sQ0FBQyxDQUFDLEtBQ2xHLElBQUttRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDekMsR0FBRyxJQUFJLENBQUMsRUFBRWMsSUFBSSxDQUFDMEIsU0FBUyxDQUFDRyxJQUFJLEVBQUNELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNyRCxDQUFDLEVBQUVzRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDcEQsQ0FBQyxFQUFFcUQsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ25ELEtBQUssRUFBRW9ELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNsRCxNQUFNLENBQUMsQ0FBQyxLQUNyRyxJQUFLbUQsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3pDLEdBQUcsSUFBSSxDQUFDLEVBQUVjLElBQUksQ0FBQzBCLFNBQVMsQ0FBQ0ksSUFBSSxFQUFDRixTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDckQsQ0FBQyxFQUFFc0QsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3BELENBQUMsRUFBRXFELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNuRCxLQUFLLEVBQUVvRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDbEQsTUFBTSxDQUFDLENBQUMsS0FDckcsSUFBS21ELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUN6QyxHQUFHLElBQUksQ0FBQyxFQUFFYyxJQUFJLENBQUMwQixTQUFTLENBQUM5QixVQUFVLEVBQUNnQyxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDckQsQ0FBQyxFQUFFc0QsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3BELENBQUMsRUFBRXFELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNuRCxLQUFLLEVBQUVvRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDbEQsTUFBTSxDQUFDLENBQUMsS0FDNUc7UUFDQXVCLElBQUksQ0FBQytCLFNBQVMsR0FBR0gsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQzdDLEtBQUs7UUFDL0JrQixJQUFJLENBQUNnQyxRQUFRLENBQUNKLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNyRCxDQUFDLEVBQUVzRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDcEQsQ0FBQyxFQUFFcUQsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ25ELEtBQUssRUFBRW9ELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNsRCxNQUFNLENBQUM7TUFDMUU7SUFDSjtFQUNKO0FBRUo7QUFDQSxTQUFTd0QsTUFBTUEsQ0FBQy9DLEdBQUcsRUFBRTtFQUNqQjtFQUNBLElBQUksRUFBRSxJQUFJbUIsUUFBUSxJQUFJRCxVQUFNLENBQUM5QixDQUFDLElBQUksQ0FBQyxJQUFJOEIsVUFBTSxDQUFDOUIsQ0FBQyxHQUFJNEQsTUFBTSxDQUFDMUQsS0FBSyxHQUFDLEVBQUcsRUFBRztJQUNsRTRCLFVBQU0sQ0FBQzlCLENBQUMsSUFBSThCLFVBQU0sQ0FBQzFCLEtBQUssR0FBR1EsR0FBRztJQUM5QmtCLFVBQU0sQ0FBQ3ZCLEtBQUssR0FBRyxDQUFDO0lBQ2hCLElBQUd1QixVQUFNLENBQUM5QixDQUFDLElBQUksQ0FBQyxFQUFFOEIsVUFBTSxDQUFDOUIsQ0FBQyxHQUFHLENBQUM7RUFDbEMsQ0FBQyxNQUNJLElBQUksRUFBRSxJQUFJK0IsUUFBUSxJQUFJRCxVQUFNLENBQUM5QixDQUFDLElBQUksQ0FBQyxJQUFJOEIsVUFBTSxDQUFDOUIsQ0FBQyxHQUFJNEQsTUFBTSxDQUFDMUQsS0FBSyxHQUFDLEVBQUcsRUFBRTtJQUN0RTRCLFVBQU0sQ0FBQzlCLENBQUMsSUFBSThCLFVBQU0sQ0FBQzFCLEtBQUssR0FBR1EsR0FBRztJQUM5QmtCLFVBQU0sQ0FBQ3ZCLEtBQUssR0FBRyxDQUFDO0lBQ2hCLElBQUd1QixVQUFNLENBQUM5QixDQUFDLElBQUs0RCxNQUFNLENBQUMxRCxLQUFLLEdBQUMsRUFBRyxFQUFHNEIsVUFBTSxDQUFDOUIsQ0FBQyxHQUFHNEQsTUFBTSxDQUFDMUQsS0FBSyxHQUFDLEVBQUU7RUFDakU7RUFDQSxLQUFJLElBQUltRCxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUcsRUFBRSxFQUFFQSxDQUFDLEVBQUUsRUFBQztJQUN4QkMsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3BELENBQUMsSUFBSUcsS0FBSztFQUN2QjtFQUNBLEtBQUksSUFBSWlELENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBRyxFQUFFLEVBQUdBLENBQUMsRUFBRSxFQUFDO0lBQ3pCLElBQUl2QixVQUFNLENBQUM3QixDQUFDLElBQUlxRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDcEQsQ0FBQyxJQUFJNkIsVUFBTSxDQUFDN0IsQ0FBQyxJQUFJcUQsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3BELENBQUMsR0FBRSxFQUFFLElBQUs2QixVQUFNLENBQUM5QixDQUFDLEdBQUVzRCxTQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDckQsQ0FBQyxHQUFDLEVBQUUsSUFBSThCLFVBQU0sQ0FBQzlCLENBQUMsR0FBR3NELFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNyRCxDQUFDLEdBQUUsR0FBRyxFQUFDO01BQy9HZ0MsRUFBRSxHQUFFLENBQUM7TUFDTEksR0FBRyxHQUFHaUIsQ0FBQztNQUNQO0lBQ0osQ0FBQyxNQUNJckIsRUFBRSxHQUFHLENBQUM7RUFDZjtFQUNBLElBQUdBLEVBQUUsSUFBSSxDQUFDLEVBQUM7SUFDUEYsVUFBTSxDQUFDN0IsQ0FBQyxHQUFHcUQsU0FBSyxDQUFDbEIsR0FBRyxDQUFDLENBQUNuQyxDQUFDLEdBQUMsRUFBRTtJQUMxQixJQUFHcUQsU0FBSyxDQUFDbEIsR0FBRyxDQUFDLENBQUN4QixHQUFHLElBQUksQ0FBQyxFQUFFO01BQ3BCO01BQ0E7TUFDQWtCLFVBQU0sQ0FBQzFCLEtBQUssR0FBQ21DLEVBQUUsR0FBQyxDQUFDO0lBQ3JCLENBQUMsTUFBSyxJQUFJZSxTQUFLLENBQUNsQixHQUFHLENBQUMsQ0FBQ3hCLEdBQUcsSUFBSSxDQUFDLEVBQUM7TUFDMUI7TUFDQTtNQUNBa0IsVUFBTSxDQUFDMUIsS0FBSyxHQUFHbUMsRUFBRTtJQUNyQixDQUFDLE1BQUssSUFBR2UsU0FBSyxDQUFDbEIsR0FBRyxDQUFDLENBQUN4QixHQUFHLElBQUksQ0FBQyxFQUFDO01BQ3pCO01BQ0FrQixVQUFNLENBQUMxQixLQUFLLEdBQUdtQyxFQUFFLEdBQUMsR0FBRztNQUNyQlQsVUFBTSxDQUFDN0IsQ0FBQyxJQUFJLEdBQUc7TUFDZjtJQUNKLENBQUMsTUFDSTtNQUNEO01BQ0E2QixVQUFNLENBQUMxQixLQUFLLEdBQUVtQyxFQUFFO01BQ2hCO0lBQ0o7RUFDSixDQUFDLE1BQ0s7SUFDRixJQUFJVCxVQUFNLENBQUM3QixDQUFDLEdBQUMsRUFBRSxFQUNmO01BQ0k2QixVQUFNLENBQUN6QixJQUFJLElBQUksQ0FBQztNQUNoQnlCLFVBQU0sQ0FBQzdCLENBQUMsR0FBRyxFQUFFO0lBQ2pCO0lBQ0E2QixVQUFNLENBQUM3QixDQUFDLElBQUksRUFBRTtJQUNkNkIsVUFBTSxDQUFDMUIsS0FBSyxHQUFFbUMsRUFBRTtJQUNoQjtFQUNKO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLElBQUdULFVBQU0sQ0FBQ3hCLEtBQUssR0FBRyxFQUFFLEVBQUVGLEtBQUssR0FBRyxFQUFFLENBQUMsS0FDNUIsSUFBRzBCLFVBQU0sQ0FBQ3hCLEtBQUssR0FBRyxFQUFFLEVBQUVGLEtBQUssR0FBRyxFQUFFLENBQUMsS0FDakMsSUFBRzBCLFVBQU0sQ0FBQ3hCLEtBQUssR0FBRyxFQUFFLEVBQUVGLEtBQUssR0FBRyxFQUFFLENBQUMsS0FDakMsSUFBRzBCLFVBQU0sQ0FBQ3hCLEtBQUssR0FBRyxFQUFFLEVBQUVGLEtBQUssR0FBRyxFQUFFLENBQUMsS0FDakMsSUFBRzBCLFVBQU0sQ0FBQ3hCLEtBQUssR0FBRyxFQUFFLEVBQUVGLEtBQUssR0FBRyxDQUFDLENBQUMsS0FDaEMsSUFBRzBCLFVBQU0sQ0FBQ3hCLEtBQUssR0FBRyxFQUFFLEVBQUVGLEtBQUssR0FBRyxDQUFDO0VBQ3BDLEtBQUksSUFBSWlELENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBRyxFQUFFLEVBQUdBLENBQUMsRUFBRSxFQUFDO0lBQ3pCLElBQUlDLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNwRCxDQUFDLElBQUksRUFBRSxFQUFFO01BQ2xCcUQsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3BELENBQUMsR0FBRzJELE1BQU0sQ0FBQ3pELE1BQU0sR0FBRyxDQUFDMEQsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBQyxDQUFDLEtBQUdELElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztNQUM3RVIsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3JELENBQUMsR0FBRzZELElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBR0YsTUFBTSxDQUFDMUQsS0FBSyxHQUFDLEdBQUc7TUFDN0M7TUFDQSxPQUFNLENBQUMsRUFDUDtRQUNJb0QsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3BELENBQUMsR0FBRzJELE1BQU0sQ0FBQ3pELE1BQU0sR0FBRyxDQUFDMEQsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxHQUFDLEVBQUUsR0FBQyxDQUFDLEtBQUdELElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRztRQUM3RVIsU0FBSyxDQUFDRCxDQUFDLENBQUMsQ0FBQ3JELENBQUMsR0FBRzZELElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBR0YsTUFBTSxDQUFDMUQsS0FBSyxHQUFDLEdBQUc7UUFDN0MsSUFBSTZELE9BQU8sR0FBRyxLQUFLO1FBQ25CLEtBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUdBLENBQUMsR0FBRyxFQUFFLEVBQUdBLENBQUMsRUFBRSxFQUN4QjtVQUNJLElBQUlYLENBQUMsSUFBRVcsQ0FBQyxFQUFHO1VBQ1gsSUFBS0gsSUFBSSxDQUFDSSxHQUFHLENBQUNYLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNyRCxDQUFDLEdBQUNzRCxTQUFLLENBQUNVLENBQUMsQ0FBQyxDQUFDaEUsQ0FBQyxDQUFDLElBQUUsR0FBRyxJQUFNNkQsSUFBSSxDQUFDSSxHQUFHLENBQUNYLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLENBQUNwRCxDQUFDLEdBQUNxRCxTQUFLLENBQUNVLENBQUMsQ0FBQyxDQUFDL0QsQ0FBQyxDQUFDLElBQUUsRUFBRyxFQUNuRjtZQUNJOEQsT0FBTyxHQUFHLElBQUk7WUFDZDtZQUNBO1VBQ0o7UUFDSjtRQUNBO1FBQ0EsSUFBRyxDQUFDQSxPQUFPLEVBQUU7TUFDakI7TUFDQTtJQUNKO0VBQ0o7RUFDQTtBQUNKO0FBQ0EsU0FBU0csR0FBR0EsQ0FBQSxFQUFHO0VBQ1hQLE1BQU0sQ0FBQyxDQUFDUSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLEdBQUdDLElBQUksSUFBSSxJQUFJLENBQUM7RUFDbEM3QixNQUFNLENBQUMsQ0FBQztFQUNSNkIsSUFBSSxHQUFHRixJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCO0FBRUEsSUFBSUMsSUFBSSxHQUFHRixJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JCRSxXQUFXLENBQUNKLEdBQUcsRUFBRSxFQUFFLENBQUM7QUFFcEIsSUFBSVosU0FBSyxHQUFHLEVBQUU7QUFDZEEsU0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUk3QyxLQUFRLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztBQUNoQyxLQUFLLElBQUk0QyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUcsRUFBRSxFQUFHQSxDQUFDLEVBQUUsRUFBQztFQUMxQjtFQUNBLElBQUlrQixDQUFDLEdBQUdWLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHO0VBQzNCLElBQUlVLEVBQUUsR0FBRyxDQUFDWCxJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFDLEVBQUUsR0FBQ1QsQ0FBQyxHQUFDLENBQUMsSUFBRSxFQUFFO0VBQ3ZDO0VBQ0EsT0FBTSxDQUFDLEVBQ1A7SUFDSTtJQUNBa0IsQ0FBQyxHQUFHVixJQUFJLENBQUNDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRztJQUN2QlUsRUFBRSxHQUFHLENBQUNYLElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUMsRUFBRSxHQUFDVCxDQUFDLEdBQUMsQ0FBQyxJQUFFLEVBQUU7SUFDbkMsSUFBSVUsT0FBTyxHQUFHLEtBQUs7SUFDbkIsS0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFHQSxDQUFDLEdBQUdYLENBQUMsRUFBR1csQ0FBQyxFQUFFLEVBQzNCO01BQ0ksSUFBR1gsQ0FBQyxJQUFFVyxDQUFDLEVBQUU7TUFDVCxJQUFLSCxJQUFJLENBQUNJLEdBQUcsQ0FBQ00sQ0FBQyxHQUFDakIsU0FBSyxDQUFDVSxDQUFDLENBQUMsQ0FBQ2hFLENBQUMsQ0FBQyxJQUFFLEdBQUcsSUFBTTZELElBQUksQ0FBQ0ksR0FBRyxDQUFDTyxFQUFFLEdBQUNsQixTQUFLLENBQUNVLENBQUMsQ0FBQyxDQUFDL0QsQ0FBQyxDQUFDLElBQUUsRUFBRyxFQUNsRTtRQUNJOEQsT0FBTyxHQUFHLElBQUk7UUFDZDtRQUNBO01BQ0o7SUFDSjtJQUNBLElBQUcsQ0FBQ0EsT0FBTyxFQUFFO0VBQ2pCO0VBQ0E7RUFDQSxJQUFHVixDQUFDLElBQUksQ0FBQyxJQUFJQSxDQUFDLElBQUksQ0FBQyxFQUFHQyxTQUFLLENBQUNELENBQUMsQ0FBQyxHQUFHLElBQUk1QyxLQUFRLENBQUM4RCxDQUFDLEVBQUNDLEVBQUUsQ0FBQyxDQUFDLEtBQy9DLElBQUtuQixDQUFDLElBQUksQ0FBQyxJQUFJQSxDQUFDLElBQUksQ0FBQyxFQUFFQyxTQUFLLENBQUNELENBQUMsQ0FBQyxHQUFHLElBQUk1QyxLQUFRLENBQUM4RCxDQUFDLEVBQUNDLEVBQUUsQ0FBQyxDQUFDLEtBQ3JELElBQUtuQixDQUFDLElBQUksQ0FBQyxFQUFHQyxTQUFLLENBQUNELENBQUMsQ0FBQyxHQUFHLElBQUl4QyxPQUFVLENBQUMwRCxDQUFDLEVBQUNDLEVBQUUsQ0FBQyxDQUFDLEtBQzlDbEIsU0FBSyxDQUFDRCxDQUFDLENBQUMsR0FBRyxJQUFJNUMsS0FBUSxDQUFDOEQsQ0FBQyxFQUFDQyxFQUFFLENBQUM7QUFDdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ucy1zaGFmdC1ub2RlLy4vc3JjL3NjcmlwdC9wbGF5ZXIuanM/OGEwMiIsIndlYnBhY2s6Ly9ucy1zaGFmdC1ub2RlLy4vc3JjL3NjcmlwdC9ibG9jay5qcz9jODI2Iiwid2VicGFjazovL25zLXNoYWZ0LW5vZGUvLi9zcmMvc2NyaXB0L2pfQmxvY2suanM/YzJiYiIsIndlYnBhY2s6Ly9ucy1zaGFmdC1ub2RlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9jb25zdCBtYXhMaWZlID0gMztcclxuXHJcbmNsYXNzIFBsYXllck9iantcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMjAwOyBcclxuICAgICAgICB0aGlzLnk9IDMwMDsgICBcclxuICAgICAgICB0aGlzLndpZHRoPSA0MDtcclxuICAgICAgICB0aGlzLmhlaWdodD0gNDA7ICBcclxuICAgICAgICB0aGlzLnNwZWVkPSAxNTA7ICAgXHJcbiAgICAgICAgdGhpcy5saWZlPSAzO1xyXG4gICAgICAgIHRoaXMuc3RhaXI9MDsgICAgICBcclxuICAgICAgICB0aGlzLnN0YXRlPTA7XHJcbiAgICAgICAgdGhpcy5jb2xvcj0gJyNGRjgwMDAnO1xyXG4gICAgfVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVyT2JqOyAiLCJjbGFzcyBCbG9ja09iantcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoYSxiKSB7XHJcbiAgICAgICAgdGhpcy54PSBhO1xyXG4gICAgICAgIHRoaXMueT0gYjtcclxuICAgICAgICB0aGlzLndpZHRoPSAxNTA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQ9IDMwO1xyXG4gICAgICAgIHRoaXMubW9kID0gMDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gJyMxOThlOTknO1xyXG4gICAgfVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvY2tPYmo7ICIsImNsYXNzIEpfQmxvY2tPYmp7XHJcbiAgICBjb25zdHJ1Y3RvcihhLGIpIHtcclxuICAgICAgICB0aGlzLng9IGE7XHJcbiAgICAgICAgdGhpcy55PSBiO1xyXG4gICAgICAgIHRoaXMud2lkdGg9IDEzMDtcclxuICAgICAgICB0aGlzLmhlaWdodD0gMzA7XHJcbiAgICAgICAgdGhpcy5tb2QgPSAzO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnI0ZGRkYwMCc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKX0Jsb2NrT2JqOyBcclxuIiwiaW1wb3J0IFBsYXllck9iaiBmcm9tIFwiLi9zY3JpcHQvcGxheWVyLmpzXCJcclxuaW1wb3J0IEJsb2NrT2JqIGZyb20gXCIuL3NjcmlwdC9ibG9jay5qc1wiO1xyXG5pbXBvcnQgSl9CbG9ja09iaiBmcm9tIFwiLi9zY3JpcHQval9CbG9jay5qc1wiO1xyXG5pbXBvcnQgRF9CbG9ja09iaiBmcm9tIFwiLi9zY3JpcHQvZF9CbG9jay5qc1wiO1xyXG5cclxuLy8tLS0tLS0tLXBhcmFtXHJcbmNvbnN0IHN0YXR1c1N0ID0gJ1N0YXJ0JztcclxuXHJcbmNvbnN0IGJncGljPW5ldyBJbWFnZSgpO1xyXG5cdFx0YmdwaWMuc3JjPVwiLi9hc3NldHMvYmcuanBnXCI7XHJcbmNvbnN0IHRvcHBpYz1uZXcgSW1hZ2UoKTtcclxuXHRcdCB0b3BwaWMuc3JjPVwiLi9hc3NldHMvdG9wLmpwZ1wiO1xyXG5jb25zdCBzdGFuZD1uZXcgSW1hZ2UoKTtcclxuXHRcdCBzdGFuZC5zcmM9XCIuL2Fzc2V0cy8xLnBuZ1wiO1xyXG5jb25zdCBibG9ja1BpYz1uZXcgSW1hZ2UoKTtcclxuXHRcdGJsb2NrUGljLnNyYz1cIi4vYXNzZXRzL2Jsb2NrLmpwZ1wiO1xyXG5jb25zdCBqX2Jsb2NrUGljPW5ldyBJbWFnZSgpO1xyXG5cdFx0al9ibG9ja1BpYy5zcmM9XCIuL2Fzc2V0cy9qYmxvY2suanBnXCI7XHJcbmNvbnN0IGxlZnRwaWM9bmV3IEltYWdlKCk7XHJcblx0XHRsZWZ0cGljLnNyYz1cIi4vYXNzZXRzL2xlZnQucG5nXCI7XHJcbmNvbnN0IHJpZ2h0cGljPW5ldyBJbWFnZSgpO1xyXG5cdFx0cmlnaHRwaWMuc3JjPVwiLi9hc3NldHMvcmlnaHQucG5nXCI7XHJcbmxldCBjYW52YXNCLGN0eEIsY2FudmFzTSxjdHhNO1xyXG5cclxubGV0IGdhbWVTdGF0dXMgPSBzdGF0dXNTdDtcclxubGV0IHBsYXllciA9IG5ldyBQbGF5ZXJPYmooKTtcclxubGV0IGtleXNEb3duID0ge307XHJcbmxldCBzcGVlZCA9IDc7IFxyXG5sZXQgdXAgPSAwLHVwMj0wO1xyXG5sZXQgZG93biA9IDEsZG93bjIgPSAxOyBcclxubGV0IG1feSA9IDAsbV95MiA9IDAsZmxhZzMgPSAwO1xyXG5sZXQgbXMgPSAyNTA7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgICBjYW52YXNCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc0JvYXJkJyk7XHJcbiAgICBjdHhCID0gY2FudmFzQi5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzTSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXNNb3ZlJyk7IFxyXG4gICAgY3R4TSA9IGNhbnZhc00uZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNhbnZhc0Iud2lkdGggPSA0ODA7XHJcbiAgICBjYW52YXNCLmhlaWdodCA9IDc0MDtcclxuICAgIGNhbnZhc00ud2lkdGggPSA0ODA7XHJcbiAgICBjYW52YXNNLmhlaWdodCA9IDMwMDtcclxuXHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGtleXNEb3duW2Uua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZGVsZXRlIGtleXNEb3duW2Uua2V5Q29kZV07XHJcbiAgICB9KTtcclxuICAgIC8vLy8vbW92ZSBieSB0b3VjaFxyXG4gICAgY2FudmFzQi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICB0b3VjaGVzID0gZS50b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICB0b3UgPSAxO1xyXG4gICAgICAgIH0pO1xyXG4gICAgY2FudmFzQi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gZS50b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICBpZiAodC5wYWdlWCA8IHRvdWNoZXMucGFnZVggJiYgcGxheWVyLnggPiAwICYmIHBsYXllci54IDwgNTYwKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIueCAtPSBwbGF5ZXIuc3BlZWQgKiAwLjAxNTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIueCA8PSAwKSBwbGF5ZXIueCA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodC5wYWdlWCA+IHRvdWNoZXMucGFnZVggJiYgcGxheWVyLnggPiAwICYmIHBsYXllci54IDwgNTYwKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIueCArPSBwbGF5ZXIuc3BlZWQgKiAwLjAxNTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXIueCA+PSA1NjApIHBsYXllci54ID0gY2FudmFzQi53aWR0aC00MTtcclxuICAgICAgICAgICAgfWVsc2UgcGxheWVyLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgLy9hbGVydCh0b3VjaGVzLnBhZ2VYKTtcclxuICAgICAgICB9KTtcdFxyXG5cclxuICAgIGlmKGdhbWVTdGF0dXMgPT0gc3RhdHVzU3QgKXtcclxuICAgICAgICBjdHhCLmRyYXdJbWFnZShiZ3BpYywwLDAsY2FudmFzQi53aWR0aCxjYW52YXNCLmhlaWdodCk7XHJcbiAgICAgICAgaWYocGxheWVyLnN0YXRlID09IDAgKSBcclxuICAgICAgICAgICAgY3R4Qi5kcmF3SW1hZ2Uoc3RhbmQscGxheWVyLngscGxheWVyLnkscGxheWVyLndpZHRoLHBsYXllci5oZWlnaHQpO1xyXG4gICAgICAgIGVsc2UgaWYocGxheWVyLnN0YXRlID09IDEpe1xyXG4gICAgICAgICAgICBjdHhCLmRyYXdJbWFnZShsZWZ0cGljLGEsMCxwbGF5ZXIud2lkdGgscGxheWVyLmhlaWdodCxwbGF5ZXIueCxwbGF5ZXIueSxwbGF5ZXIud2lkdGgscGxheWVyLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGErPTUwO1xyXG4gICAgICAgICAgICBpZihhID49IDIwMCkgYSA9MDtcclxuICAgICAgICB9XHRcclxuICAgICAgICBlbHNlIGlmKHBsYXllci5zdGF0ZSA9PSAyKXtcclxuICAgICAgICAgICAgY3R4Qi5kcmF3SW1hZ2UocmlnaHRwaWMsYiwwLHBsYXllci53aWR0aCxwbGF5ZXIuaGVpZ2h0LHBsYXllci54LHBsYXllci55LHBsYXllci53aWR0aCxwbGF5ZXIuaGVpZ2h0KTtcclxuICAgICAgICAgICAgYiArPTUwO1xyXG4gICAgICAgICAgICBpZihiID49IDIwMCkgYiA9MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4Qi5kcmF3SW1hZ2UodG9wcGljLDAsMCxjYW52YXNCLndpZHRoLDQwKTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcclxuICAgICAgICAgICAgaWYoQXJyYXlbaV0ubW9kID09IDApIGN0eEIuZHJhd0ltYWdlKGJsb2NrUGljLEFycmF5W2ldLngsIEFycmF5W2ldLnksIEFycmF5W2ldLndpZHRoLCBBcnJheVtpXS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICAoQXJyYXlbaV0ubW9kID09IDEpIGN0eEIuZHJhd0ltYWdlKHNwaWMsQXJyYXlbaV0ueCwgQXJyYXlbaV0ueSwgQXJyYXlbaV0ud2lkdGgsIEFycmF5W2ldLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgIChBcnJheVtpXS5tb2QgPT0gMikgY3R4Qi5kcmF3SW1hZ2Uoa3BpYyxBcnJheVtpXS54LCBBcnJheVtpXS55LCBBcnJheVtpXS53aWR0aCwgQXJyYXlbaV0uaGVpZ2h0KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAgKEFycmF5W2ldLm1vZCA9PSAzKSBjdHhCLmRyYXdJbWFnZShqX2Jsb2NrUGljLEFycmF5W2ldLngsIEFycmF5W2ldLnksIEFycmF5W2ldLndpZHRoLCBBcnJheVtpXS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY3R4Qi5maWxsU3R5bGUgPSBBcnJheVtpXS5jb2xvcjtcclxuICAgICAgICAgICAgICAgIGN0eEIuZmlsbFJlY3QoQXJyYXlbaV0ueCwgQXJyYXlbaV0ueSwgQXJyYXlbaV0ud2lkdGgsIEFycmF5W2ldLmhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZShtb2QpIHtcclxuICAgIC8vIGlmKGdhbWUgPT0gMSl7XHJcbiAgICBpZiAoMzcgaW4ga2V5c0Rvd24gJiYgcGxheWVyLnggPj0gMCAmJiBwbGF5ZXIueCA8IChjYW52YXMud2lkdGgtNDApICkge1xyXG4gICAgICAgIHBsYXllci54IC09IHBsYXllci5zcGVlZCAqIG1vZDtcclxuICAgICAgICBwbGF5ZXIuc3RhdGUgPSAxO1xyXG4gICAgICAgIGlmKHBsYXllci54IDw9IDApIHBsYXllci54ID0gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKDM5IGluIGtleXNEb3duICYmIHBsYXllci54ID49IDAgJiYgcGxheWVyLnggPCAoY2FudmFzLndpZHRoLTQwKSkge1xyXG4gICAgICAgIHBsYXllci54ICs9IHBsYXllci5zcGVlZCAqIG1vZDtcclxuICAgICAgICBwbGF5ZXIuc3RhdGUgPSAyO1xyXG4gICAgICAgIGlmKHBsYXllci54ID49IChjYW52YXMud2lkdGgtNDApICkgcGxheWVyLnggPSBjYW52YXMud2lkdGgtNDE7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDEwOyBpKyspe1xyXG4gICAgICAgIEFycmF5W2ldLnkgLT0gc3BlZWQ7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcclxuICAgICAgICBpZigocGxheWVyLnkgPD0gQXJyYXlbaV0ueSAgJiZwbGF5ZXIueSA+PSBBcnJheVtpXS55IC00MCApJiYgcGxheWVyLnggPkFycmF5W2ldLngtMjAgJiYgcGxheWVyLnggPCBBcnJheVtpXS54ICsxNTApe1xyXG4gICAgICAgICAgICB1cCA9MTtcclxuICAgICAgICAgICAgbV95ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdXAgPSAwO1xyXG4gICAgfVx0XHJcbiAgICBpZih1cCA9PSAxKXtcclxuICAgICAgICBwbGF5ZXIueSA9IEFycmF5W21feV0ueS00MDtcclxuICAgICAgICBpZihBcnJheVttX3ldLm1vZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMCAmJnBsYXllci5saWZlPCBmdWxsbGlmZSApIHBsYXllci5saWZlKys7XHJcbiAgICAgICAgICAgIC8vIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3BlZWQ9bXMvMztcclxuICAgICAgICB9ZWxzZSBpZiAoQXJyYXlbbV95XS5tb2QgPT0gMil7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMClwbGF5ZXIubGlmZSAtPSA1O1xyXG4gICAgICAgICAgICAvLyBmbGFnID0gMTtcclxuICAgICAgICAgICAgcGxheWVyLnNwZWVkID0gbXM7XHJcbiAgICAgICAgfWVsc2UgaWYoQXJyYXlbbV95XS5tb2QgPT0gMyl7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMCAmJnBsYXllci5saWZlPCBmdWxsbGlmZSApIHBsYXllci5saWZlKys7XHJcbiAgICAgICAgICAgIHBsYXllci5zcGVlZCA9IG1zKjEuNTtcclxuICAgICAgICAgICAgcGxheWVyLnkgLT0gMTAwO1xyXG4gICAgICAgICAgICAvLyBmbGFnID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMCAmJnBsYXllci5saWZlPCBmdWxsbGlmZSApIHBsYXllci5saWZlKys7XHJcbiAgICAgICAgICAgIHBsYXllci5zcGVlZCA9bXM7XHJcbiAgICAgICAgICAgIC8vIGZsYWcgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cdFxyXG4gICAgZWxzZSAge1xyXG4gICAgICAgIGlmKCBwbGF5ZXIueTwzNSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGF5ZXIubGlmZSAtPSA1O1xyXG4gICAgICAgICAgICBwbGF5ZXIueSA9IDM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5ZXIueSArPSAxMDtcclxuICAgICAgICBwbGF5ZXIuc3BlZWQgPW1zO1xyXG4gICAgICAgIC8vIGZsYWcgPSAwO1xyXG4gICAgfVxyXG4gICAgLy8gaWYocGxheWVyLnkgPiBjYW52YXMuaGVpZ2h0IHx8IHBsYXllci5saWZlIDw9MCkge1xyXG4gICAgLy8gICAgIGdhbWUgPSAwO1xyXG4gICAgLy8gICAgIGVuZCA9IDE7XHJcbiAgICAvLyB9XHJcbiAgICAvL2NvbnNvbGUubG9nKGZsYWcrXCIgIFwiK3BsYXllci5saWZlICsgXCIgICBcIiArIHBsYXllci5zcGVlZCk7XHJcbiAgICBpZihwbGF5ZXIuc3RhaXIgPiA5NSkgc3BlZWQgPSAxNTtcclxuICAgIGVsc2UgaWYocGxheWVyLnN0YWlyID4gODApIHNwZWVkID0gMTQ7XHJcbiAgICBlbHNlIGlmKHBsYXllci5zdGFpciA+IDY1KSBzcGVlZCA9IDEyO1xyXG4gICAgZWxzZSBpZihwbGF5ZXIuc3RhaXIgPiA1MCkgc3BlZWQgPSAxMDtcclxuICAgIGVsc2UgaWYocGxheWVyLnN0YWlyID4gMzUpIHNwZWVkID0gOTtcclxuICAgIGVsc2UgaWYocGxheWVyLnN0YWlyID4gMjApIHNwZWVkID0gODtcclxuICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgMTAgOyBpKyspe1xyXG4gICAgICAgIGlmKCBBcnJheVtpXS55IDw9IDMwICl7XHJcbiAgICAgICAgICAgIEFycmF5W2ldLnkgPSBjYW52YXMuaGVpZ2h0ICsgKE1hdGgucmFuZG9tKCkqMTArMSkqKE1hdGgucmFuZG9tKCkqNTArNTApICsgMjAwO1xyXG4gICAgICAgICAgICBBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aC0xMDA7XHJcbiAgICAgICAgICAgIC8vLyBBdm9pZCBPdmVybGFwcGluZ1xyXG4gICAgICAgICAgICB3aGlsZSgxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBcnJheVtpXS55ID0gY2FudmFzLmhlaWdodCArIChNYXRoLnJhbmRvbSgpKjEwKzEpKihNYXRoLnJhbmRvbSgpKjUwKzUwKSArIDIwMDtcclxuICAgICAgICAgICAgICAgIEFycmF5W2ldLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoLTEwMDtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDAgOyBqIDwgMTAgOyBqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGk9PWogKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggKE1hdGguYWJzKEFycmF5W2ldLngtQXJyYXlbal0ueCk8PTIwMCkgJiYgKE1hdGguYWJzKEFycmF5W2ldLnktQXJyYXlbal0ueSk8PTYwKSAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvdmVybGFwIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvdmVybGFwKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvdmVybGFwKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgfVx0XHJcbiAgICB9XHJcbiAgICAvL31cclxufVxyXG5mdW5jdGlvbiBydW4oKSB7XHJcbiAgICB1cGRhdGUoKERhdGUubm93KCkgLSB0aW1lKSAvIDEwMDApO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICB0aW1lID0gRGF0ZS5ub3coKTtcclxufVxyXG5cclxudmFyIHRpbWUgPSBEYXRlLm5vdygpO1xyXG5zZXRJbnRlcnZhbChydW4sIDQwKTtcclxuXHJcbmxldCBBcnJheSA9IFtdO1xyXG5BcnJheVswXSA9IG5ldyBCbG9ja09iaigxNTAsNjAwKTtcclxuZm9yKCBsZXQgaSA9IDEgOyBpIDwgMTAgOyBpKyspe1xyXG4gICAgLy8gbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzQi53aWR0aC0xMDA7XHJcbiAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAzODA7XHJcbiAgICBsZXQgZGUgPSAoTWF0aC5yYW5kb20oKSAqIDEwKzEwK2kqNCkqNDAgO1xyXG4gICAgLy8vIEF2b2lkIE92ZXJsYXBwaW5nXHJcbiAgICB3aGlsZSgxKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHIgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzQi53aWR0aC0xMDA7XHJcbiAgICAgICAgciA9IE1hdGgucmFuZG9tKCkgKiAzODA7XHJcbiAgICAgICAgZGUgPSAoTWF0aC5yYW5kb20oKSAqIDEwKzEwK2kqNCkqNDAgO1xyXG4gICAgICAgIGxldCBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMCA7IGogPCBpIDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaT09aikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKCAoTWF0aC5hYnMoci1BcnJheVtqXS54KTw9MjAwKSAmJiAoTWF0aC5hYnMoZGUtQXJyYXlbal0ueSk8PTYwKSAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdmVybGFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvdmVybGFwIVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFvdmVybGFwKSBicmVhaztcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGlmKGkgPT0gMyB8fCBpID09IDkgKSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxuICAgIGVsc2UgaWYgKCBpID09IDIgfHwgaSA9PSA3KSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxuICAgIGVsc2UgaWYgKCBpID09IDUgKSBBcnJheVtpXSA9IG5ldyBKX0Jsb2NrT2JqKHIsZGUpO1xyXG4gICAgZWxzZSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUGxheWVyT2JqIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJsaWZlIiwic3RhaXIiLCJzdGF0ZSIsImNvbG9yIiwiQmxvY2tPYmoiLCJhIiwiYiIsIm1vZCIsIkpfQmxvY2tPYmoiLCJEX0Jsb2NrT2JqIiwic3RhdHVzU3QiLCJiZ3BpYyIsIkltYWdlIiwic3JjIiwidG9wcGljIiwic3RhbmQiLCJibG9ja1BpYyIsImpfYmxvY2tQaWMiLCJsZWZ0cGljIiwicmlnaHRwaWMiLCJjYW52YXNCIiwiY3R4QiIsImNhbnZhc00iLCJjdHhNIiwiZ2FtZVN0YXR1cyIsInBsYXllciIsImtleXNEb3duIiwidXAiLCJ1cDIiLCJkb3duIiwiZG93bjIiLCJtX3kiLCJtX3kyIiwiZmxhZzMiLCJtcyIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwidG91Y2hlcyIsInRvdSIsInQiLCJwYWdlWCIsImRyYXdJbWFnZSIsImkiLCJBcnJheSIsInNwaWMiLCJrcGljIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGUiLCJjYW52YXMiLCJNYXRoIiwicmFuZG9tIiwib3ZlcmxhcCIsImoiLCJhYnMiLCJydW4iLCJEYXRlIiwibm93IiwidGltZSIsInNldEludGVydmFsIiwiciIsImRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///755\n')},335:function(){eval("// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM1LmpzIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnMtc2hhZnQtbm9kZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///335\n")}};__webpack_modules__[755]();var __webpack_exports__={};__webpack_modules__[335]()})();