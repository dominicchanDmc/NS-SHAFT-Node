(function(){"use strict";var __webpack_modules__={755:function(){eval('\n;// CONCATENATED MODULE: ./src/script/player.js\n//const maxLife = 3;\n\nclass PlayerObj {\n  constructor() {\n    this.x = 200;\n    this.y = 300;\n    this.width = 40;\n    this.height = 40;\n    this.speed = 150;\n    this.life = 3;\n    this.stair = 0;\n    this.state = 0;\n    this.color = \'#FF8000\';\n  }\n}\n/* harmony default export */ var player = (PlayerObj);\n;// CONCATENATED MODULE: ./src/script/block.js\nclass BlockObj {\n  constructor(a, b) {\n    this.x = a;\n    this.y = b;\n    this.width = 150;\n    this.height = 30;\n    this.mod = 0;\n    this.color = \'#198e99\';\n  }\n}\n/* harmony default export */ var block = (BlockObj);\n;// CONCATENATED MODULE: ./src/script/j_Block.js\nclass J_BlockObj {\n  constructor(a, b) {\n    this.x = a;\n    this.y = b;\n    this.width = 130;\n    this.height = 30;\n    this.mod = 3;\n    this.color = \'#FFFF00\';\n  }\n}\n;\n/* harmony default export */ var j_Block = (J_BlockObj);\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\n//--------param\nconst statusSt = \'Start\';\nconst bgpic = new Image();\nbgpic.src = "./assets/bg.jpg";\nconst toppic = new Image();\ntoppic.src = "./assets/top.jpg";\nconst stand = new Image();\nstand.src = "./assets/1.png";\nconst blockPic = new Image();\nblockPic.src = "./assets/block.jpg";\nconst j_blockPic = new Image();\nj_blockPic.src = "./assets/jblock.jpg";\nconst leftpic = new Image();\nleftpic.src = "./assets/left.png";\nconst rightpic = new Image();\nrightpic.src = "./assets/right.png";\nlet canvasB, ctxB, canvasM, ctxM;\nlet gameStatus = statusSt;\nlet src_player = new player();\nlet keysDown = {};\nlet speed = 7;\nlet up = 0,\n  up2 = 0;\nlet down = 1,\n  down2 = 1;\nlet m_y = 0,\n  m_y2 = 0,\n  flag3 = 0;\nlet leftMove = 0,\n  rightMove = 0,\n  r = 0;\nlet ms = 250;\n//-------------------------\nfunction render() {\n  canvasB = document.getElementById(\'canvasBoard\');\n  ctxB = canvasB.getContext(\'2d\');\n  canvasM = document.getElementById(\'canvasMove\');\n  ctxM = canvasM.getContext(\'2d\');\n  canvasB.width = 480;\n  canvasB.height = 740;\n  canvasM.width = 480;\n  canvasM.height = 300;\n  window.addEventListener(\'keydown\', function (e) {\n    keysDown[e.keyCode] = true;\n  });\n  window.addEventListener(\'keyup\', function (e) {\n    delete keysDown[e.keyCode];\n  });\n  /////move by touch\n  canvasB.addEventListener("touchstart", function (e) {\n    touches = e.touches[0];\n    tou = 1;\n  });\n  canvasB.addEventListener("touchmove", function (e) {\n    var t = e.touches[0];\n    if (t.pageX < touches.pageX && src_player.x > 0 && src_player.x < 560) {\n      src_player.x -= src_player.speed * 0.015;\n      src_player.state = 1;\n      if (src_player.x <= 0) src_player.x = 1;\n    } else if (t.pageX > touches.pageX && src_player.x > 0 && src_player.x < 560) {\n      src_player.x += src_player.speed * 0.015;\n      src_player.state = 2;\n      if (src_player.x >= 560) src_player.x = canvasB.width - 41;\n    } else src_player.state = 0;\n    //alert(touches.pageX);\n  });\n  if (gameStatus == statusSt) {\n    ctxB.drawImage(bgpic, 0, 0, canvasB.width, canvasB.height);\n    if (src_player.state == 0) ctxB.drawImage(stand, src_player.x, src_player.y, src_player.width, src_player.height);else if (src_player.state == 1) {\n      ctxB.drawImage(leftpic, leftMove, 0, src_player.width, src_player.height, src_player.x, src_player.y, src_player.width, src_player.height);\n      leftMove += 50;\n      if (leftMove >= 200) leftMove = 0;\n    } else if (src_player.state == 2) {\n      ctxB.drawImage(rightpic, rightMove, 0, src_player.width, src_player.height, src_player.x, src_player.y, src_player.width, src_player.height);\n      rightMove += 50;\n      if (rightMove >= 200) rightMove = 0;\n    }\n    ctxB.drawImage(toppic, 0, 0, canvasB.width, 40);\n    for (let i = 0; i < 10; i++) {\n      if (src_Array[i].mod == 0) ctxB.drawImage(blockPic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 1) ctxB.drawImage(spic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 2) ctxB.drawImage(kpic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 3) ctxB.drawImage(j_blockPic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else {\n        ctxB.fillStyle = src_Array[i].color;\n        ctxB.fillRect(src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);\n      }\n    }\n  }\n}\nfunction update(mod) {\n  // if(game == 1){\n  if (37 in keysDown && src_player.x >= 0 && src_player.x < canvasB.width - 40) {\n    src_player.x -= src_player.speed * mod;\n    src_player.state = 1;\n    if (src_player.x <= 0) src_player.x = 1;\n  } else if (39 in keysDown && src_player.x >= 0 && src_player.x < canvasB.width - 40) {\n    src_player.x += src_player.speed * mod;\n    src_player.state = 2;\n    if (src_player.x >= canvasB.width - 40) src_player.x = canvasB.width - 41;\n  }\n  for (let i = 0; i < 10; i++) {\n    src_Array[i].y -= speed;\n  }\n  for (let i = 0; i < 10; i++) {\n    if (src_player.y <= src_Array[i].y && src_player.y >= src_Array[i].y - 40 && src_player.x > src_Array[i].x - 20 && src_player.x < src_Array[i].x + 150) {\n      up = 1;\n      m_y = i;\n      break;\n    } else up = 0;\n  }\n  if (up == 1) {\n    src_player.y = src_Array[m_y].y - 40;\n    if (src_Array[m_y].mod == 1) {\n      // if(flag == 0 &&player.life< fulllife ) player.life++;\n      // flag = 1;\n      src_player.speed = ms / 3;\n    } else if (src_Array[m_y].mod == 2) {\n      // if(flag == 0)player.life -= 5;\n      // flag = 1;\n      src_player.speed = ms;\n    } else if (src_Array[m_y].mod == 3) {\n      // if(flag == 0 &&player.life< fulllife ) player.life++;\n      src_player.speed = ms * 1.5;\n      src_player.y -= 100;\n      // flag = 1;\n    } else {\n      // if(flag == 0 &&player.life< fulllife ) player.life++;\n      src_player.speed = ms;\n      // flag = 1;\n    }\n  } else {\n    if (src_player.y < 35) {\n      src_player.life -= 5;\n      src_player.y = 35;\n    }\n    src_player.y += 10;\n    src_player.speed = ms;\n    // flag = 0;\n  }\n  // if(player.y > canvasB.height || player.life <=0) {\n  //     game = 0;\n  //     end = 1;\n  // }\n  //console.log(flag+"  "+player.life + "   " + player.speed);\n  if (src_player.stair > 95) speed = 15;else if (src_player.stair > 80) speed = 14;else if (src_player.stair > 65) speed = 12;else if (src_player.stair > 50) speed = 10;else if (src_player.stair > 35) speed = 9;else if (src_player.stair > 20) speed = 8;\n  for (let i = 0; i < 10; i++) {\n    if (src_Array[i].y <= 30) {\n      src_Array[i].y = canvasB.height + (Math.random() * 10 + 1) * (Math.random() * 50 + 50) + 200;\n      src_Array[i].x = Math.random() * canvasB.width - 100;\n      /// Avoid Overlapping\n      while (1) {\n        src_Array[i].y = canvasB.height + (Math.random() * 10 + 1) * (Math.random() * 50 + 50) + 200;\n        src_Array[i].x = Math.random() * canvasB.width - 100;\n        var overlap = false;\n        for (let j = 0; j < 10; j++) {\n          if (i == j) continue;\n          if (Math.abs(src_Array[i].x - src_Array[j].x) <= 200 && Math.abs(src_Array[i].y - src_Array[j].y) <= 60) {\n            overlap = true;\n            //console.log("overlap!");\n            break;\n          }\n        }\n        //console.log(overlap);\n        if (!overlap) break;\n      }\n      /////////////////////////////////////\n    }\n  }\n  //}\n}\nfunction run() {\n  update((Date.now() - time) / 1000);\n  render();\n  time = Date.now();\n}\nvar time = Date.now();\nsetInterval(run, 40);\nlet src_Array = [];\nsrc_Array[0] = new block(150, 600);\nfor (let i = 1; i < 10; i++) {\n  // let r = Math.random() * canvasB.width-100;\n  let r = Math.random() * 380;\n  let de = (Math.random() * 10 + 10 + i * 4) * 40;\n  /// Avoid Overlapping\n  while (1) {\n    // r = Math.random() * canvasB.width-100;\n    r = Math.random() * 380;\n    de = (Math.random() * 10 + 10 + i * 4) * 40;\n    let overlap = false;\n    for (let j = 0; j < i; j++) {\n      if (i == j) continue;\n      if (Math.abs(r - src_Array[j].x) <= 200 && Math.abs(de - src_Array[j].y) <= 60) {\n        overlap = true;\n        //console.log("overlap!");\n        break;\n      }\n    }\n    if (!overlap) break;\n  }\n  /////////////////////////////////////\n  if (i == 3 || i == 9) src_Array[i] = new block(r, de);else if (i == 2 || i == 7) src_Array[i] = new block(r, de);else if (i == 5) src_Array[i] = new j_Block(r, de);else src_Array[i] = new block(r, de);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDUyxDQUFDLENBQUMsQ0FBQ2pFLENBQUMsQ0FBQyxJQUFFLEVBQUcsRUFDbEU7UUFDSWdFLE9BQU8sR0FBRyxJQUFJO1FBQ2Q7UUFDQTtNQUNKO0lBQ0o7SUFDQSxJQUFHLENBQUNBLE9BQU8sRUFBRTtFQUNqQjtFQUNBO0VBQ0EsSUFBR1QsQ0FBQyxJQUFJLENBQUMsSUFBSUEsQ0FBQyxJQUFJLENBQUMsRUFBR0MsU0FBSyxDQUFDRCxDQUFDLENBQUMsR0FBRyxJQUFJL0MsS0FBUSxDQUFDZ0MsQ0FBQyxFQUFDZ0MsRUFBRSxDQUFDLENBQUMsS0FDL0MsSUFBS2pCLENBQUMsSUFBSSxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLEVBQUVDLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLEdBQUcsSUFBSS9DLEtBQVEsQ0FBQ2dDLENBQUMsRUFBQ2dDLEVBQUUsQ0FBQyxDQUFDLEtBQ3JELElBQUtqQixDQUFDLElBQUksQ0FBQyxFQUFHQyxTQUFLLENBQUNELENBQUMsQ0FBQyxHQUFHLElBQUkzQyxPQUFVLENBQUM0QixDQUFDLEVBQUNnQyxFQUFFLENBQUMsQ0FBQyxLQUM5Q2hCLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLEdBQUcsSUFBSS9DLEtBQVEsQ0FBQ2dDLENBQUMsRUFBQ2dDLEVBQUUsQ0FBQztBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL25zLXNoYWZ0LW5vZGUvLi9zcmMvc2NyaXB0L3BsYXllci5qcz84YTAyIiwid2VicGFjazovL25zLXNoYWZ0LW5vZGUvLi9zcmMvc2NyaXB0L2Jsb2NrLmpzP2M4MjYiLCJ3ZWJwYWNrOi8vbnMtc2hhZnQtbm9kZS8uL3NyYy9zY3JpcHQval9CbG9jay5qcz9jMmJiIiwid2VicGFjazovL25zLXNoYWZ0LW5vZGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IG1heExpZmUgPSAzO1xyXG5cclxuY2xhc3MgUGxheWVyT2Jqe1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnggPSAyMDA7IFxyXG4gICAgICAgIHRoaXMueT0gMzAwOyAgIFxyXG4gICAgICAgIHRoaXMud2lkdGg9IDQwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PSA0MDsgIFxyXG4gICAgICAgIHRoaXMuc3BlZWQ9IDE1MDsgICBcclxuICAgICAgICB0aGlzLmxpZmU9IDM7XHJcbiAgICAgICAgdGhpcy5zdGFpcj0wOyAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGU9MDtcclxuICAgICAgICB0aGlzLmNvbG9yPSAnI0ZGODAwMCc7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJPYmo7ICIsImNsYXNzIEJsb2NrT2Jqe1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihhLGIpIHtcclxuICAgICAgICB0aGlzLng9IGE7XHJcbiAgICAgICAgdGhpcy55PSBiO1xyXG4gICAgICAgIHRoaXMud2lkdGg9IDE1MDtcclxuICAgICAgICB0aGlzLmhlaWdodD0gMzA7XHJcbiAgICAgICAgdGhpcy5tb2QgPSAwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnIzE5OGU5OSc7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja09iajsgIiwiY2xhc3MgSl9CbG9ja09iantcclxuICAgIGNvbnN0cnVjdG9yKGEsYikge1xyXG4gICAgICAgIHRoaXMueD0gYTtcclxuICAgICAgICB0aGlzLnk9IGI7XHJcbiAgICAgICAgdGhpcy53aWR0aD0gMTMwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PSAzMDtcclxuICAgICAgICB0aGlzLm1vZCA9IDM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjRkZGRjAwJztcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpfQmxvY2tPYmo7IFxyXG4iLCJpbXBvcnQgUGxheWVyT2JqIGZyb20gXCIuL3NjcmlwdC9wbGF5ZXIuanNcIlxyXG5pbXBvcnQgQmxvY2tPYmogZnJvbSBcIi4vc2NyaXB0L2Jsb2NrLmpzXCI7XHJcbmltcG9ydCBKX0Jsb2NrT2JqIGZyb20gXCIuL3NjcmlwdC9qX0Jsb2NrLmpzXCI7XHJcbmltcG9ydCBEX0Jsb2NrT2JqIGZyb20gXCIuL3NjcmlwdC9kX0Jsb2NrLmpzXCI7XHJcblxyXG4vLy0tLS0tLS0tcGFyYW1cclxuY29uc3Qgc3RhdHVzU3QgPSAnU3RhcnQnO1xyXG5cclxuY29uc3QgYmdwaWM9bmV3IEltYWdlKCk7XHJcblx0XHRiZ3BpYy5zcmM9XCIuL2Fzc2V0cy9iZy5qcGdcIjtcclxuY29uc3QgdG9wcGljPW5ldyBJbWFnZSgpO1xyXG5cdFx0IHRvcHBpYy5zcmM9XCIuL2Fzc2V0cy90b3AuanBnXCI7XHJcbmNvbnN0IHN0YW5kPW5ldyBJbWFnZSgpO1xyXG5cdFx0IHN0YW5kLnNyYz1cIi4vYXNzZXRzLzEucG5nXCI7XHJcbmNvbnN0IGJsb2NrUGljPW5ldyBJbWFnZSgpO1xyXG5cdFx0YmxvY2tQaWMuc3JjPVwiLi9hc3NldHMvYmxvY2suanBnXCI7XHJcbmNvbnN0IGpfYmxvY2tQaWM9bmV3IEltYWdlKCk7XHJcblx0XHRqX2Jsb2NrUGljLnNyYz1cIi4vYXNzZXRzL2pibG9jay5qcGdcIjtcclxuY29uc3QgbGVmdHBpYz1uZXcgSW1hZ2UoKTtcclxuXHRcdGxlZnRwaWMuc3JjPVwiLi9hc3NldHMvbGVmdC5wbmdcIjtcclxuY29uc3QgcmlnaHRwaWM9bmV3IEltYWdlKCk7XHJcblx0XHRyaWdodHBpYy5zcmM9XCIuL2Fzc2V0cy9yaWdodC5wbmdcIjtcclxubGV0IGNhbnZhc0IsY3R4QixjYW52YXNNLGN0eE07XHJcblxyXG5sZXQgZ2FtZVN0YXR1cyA9IHN0YXR1c1N0O1xyXG5sZXQgcGxheWVyID0gbmV3IFBsYXllck9iaigpO1xyXG5sZXQga2V5c0Rvd24gPSB7fTtcclxubGV0IHNwZWVkID0gNzsgXHJcbmxldCB1cCA9IDAsdXAyPTA7XHJcbmxldCBkb3duID0gMSxkb3duMiA9IDE7IFxyXG5sZXQgbV95ID0gMCxtX3kyID0gMCxmbGFnMyA9IDA7XHJcbmxldCBsZWZ0TW92ZSA9IDAgLHJpZ2h0TW92ZSA9IDAsciA9IDA7XHJcbmxldCBtcyA9IDI1MDtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNhbnZhc0IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzQm9hcmQnKTtcclxuICAgIGN0eEIgPSBjYW52YXNCLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXNNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc01vdmUnKTsgXHJcbiAgICBjdHhNID0gY2FudmFzTS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzQi53aWR0aCA9IDQ4MDtcclxuICAgIGNhbnZhc0IuaGVpZ2h0ID0gNzQwO1xyXG4gICAgY2FudmFzTS53aWR0aCA9IDQ4MDtcclxuICAgIGNhbnZhc00uaGVpZ2h0ID0gMzAwO1xyXG5cclxuICAgIFxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAga2V5c0Rvd25bZS5rZXlDb2RlXSA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBkZWxldGUga2V5c0Rvd25bZS5rZXlDb2RlXTtcclxuICAgIH0pO1xyXG4gICAgLy8vLy9tb3ZlIGJ5IHRvdWNoXHJcbiAgICBjYW52YXNCLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHRvdWNoZXMgPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIHRvdSA9IDE7XHJcbiAgICAgICAgfSk7XHJcbiAgICBjYW52YXNCLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBlLnRvdWNoZXNbMF07XHJcbiAgICAgICAgICAgIGlmICh0LnBhZ2VYIDwgdG91Y2hlcy5wYWdlWCAmJiBwbGF5ZXIueCA+IDAgJiYgcGxheWVyLnggPCA1NjApIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci54IC09IHBsYXllci5zcGVlZCAqIDAuMDE1O1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIGlmKHBsYXllci54IDw9IDApIHBsYXllci54ID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0LnBhZ2VYID4gdG91Y2hlcy5wYWdlWCAmJiBwbGF5ZXIueCA+IDAgJiYgcGxheWVyLnggPCA1NjApIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci54ICs9IHBsYXllci5zcGVlZCAqIDAuMDE1O1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgIGlmKHBsYXllci54ID49IDU2MCkgcGxheWVyLnggPSBjYW52YXNCLndpZHRoLTQxO1xyXG4gICAgICAgICAgICB9ZWxzZSBwbGF5ZXIuc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAvL2FsZXJ0KHRvdWNoZXMucGFnZVgpO1xyXG4gICAgICAgIH0pO1x0XHJcblxyXG4gICAgaWYoZ2FtZVN0YXR1cyA9PSBzdGF0dXNTdCApe1xyXG4gICAgICAgIGN0eEIuZHJhd0ltYWdlKGJncGljLDAsMCxjYW52YXNCLndpZHRoLGNhbnZhc0IuaGVpZ2h0KTtcclxuICAgICAgICBpZihwbGF5ZXIuc3RhdGUgPT0gMCApIFxyXG4gICAgICAgICAgICBjdHhCLmRyYXdJbWFnZShzdGFuZCxwbGF5ZXIueCxwbGF5ZXIueSxwbGF5ZXIud2lkdGgscGxheWVyLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBpZihwbGF5ZXIuc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIGN0eEIuZHJhd0ltYWdlKGxlZnRwaWMsbGVmdE1vdmUsMCxwbGF5ZXIud2lkdGgscGxheWVyLmhlaWdodCxwbGF5ZXIueCxwbGF5ZXIueSxwbGF5ZXIud2lkdGgscGxheWVyLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGxlZnRNb3ZlKz01MDtcclxuICAgICAgICAgICAgaWYobGVmdE1vdmUgPj0gMjAwKSBsZWZ0TW92ZSA9MDtcclxuICAgICAgICB9XHRcclxuICAgICAgICBlbHNlIGlmKHBsYXllci5zdGF0ZSA9PSAyKXtcclxuICAgICAgICAgICAgY3R4Qi5kcmF3SW1hZ2UocmlnaHRwaWMscmlnaHRNb3ZlLDAscGxheWVyLndpZHRoLHBsYXllci5oZWlnaHQscGxheWVyLngscGxheWVyLnkscGxheWVyLndpZHRoLHBsYXllci5oZWlnaHQpO1xyXG4gICAgICAgICAgICByaWdodE1vdmUgKz01MDtcclxuICAgICAgICAgICAgaWYocmlnaHRNb3ZlID49IDIwMCkgcmlnaHRNb3ZlID0wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHhCLmRyYXdJbWFnZSh0b3BwaWMsMCwwLGNhbnZhc0Iud2lkdGgsNDApO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgMTAgOyBpKyspe1xyXG4gICAgICAgICAgICBpZihBcnJheVtpXS5tb2QgPT0gMCkgY3R4Qi5kcmF3SW1hZ2UoYmxvY2tQaWMsQXJyYXlbaV0ueCwgQXJyYXlbaV0ueSwgQXJyYXlbaV0ud2lkdGgsIEFycmF5W2ldLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgIChBcnJheVtpXS5tb2QgPT0gMSkgY3R4Qi5kcmF3SW1hZ2Uoc3BpYyxBcnJheVtpXS54LCBBcnJheVtpXS55LCBBcnJheVtpXS53aWR0aCwgQXJyYXlbaV0uaGVpZ2h0KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAgKEFycmF5W2ldLm1vZCA9PSAyKSBjdHhCLmRyYXdJbWFnZShrcGljLEFycmF5W2ldLngsIEFycmF5W2ldLnksIEFycmF5W2ldLndpZHRoLCBBcnJheVtpXS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICAoQXJyYXlbaV0ubW9kID09IDMpIGN0eEIuZHJhd0ltYWdlKGpfYmxvY2tQaWMsQXJyYXlbaV0ueCwgQXJyYXlbaV0ueSwgQXJyYXlbaV0ud2lkdGgsIEFycmF5W2ldLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjdHhCLmZpbGxTdHlsZSA9IEFycmF5W2ldLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY3R4Qi5maWxsUmVjdChBcnJheVtpXS54LCBBcnJheVtpXS55LCBBcnJheVtpXS53aWR0aCwgQXJyYXlbaV0uaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVx0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlKG1vZCkge1xyXG4gICAgLy8gaWYoZ2FtZSA9PSAxKXtcclxuICAgIGlmICgzNyBpbiBrZXlzRG93biAmJiBwbGF5ZXIueCA+PSAwICYmIHBsYXllci54IDwgKGNhbnZhc0Iud2lkdGgtNDApICkge1xyXG4gICAgICAgIHBsYXllci54IC09IHBsYXllci5zcGVlZCAqIG1vZDtcclxuICAgICAgICBwbGF5ZXIuc3RhdGUgPSAxO1xyXG4gICAgICAgIGlmKHBsYXllci54IDw9IDApIHBsYXllci54ID0gMTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKDM5IGluIGtleXNEb3duICYmIHBsYXllci54ID49IDAgJiYgcGxheWVyLnggPCAoY2FudmFzQi53aWR0aC00MCkpIHtcclxuICAgICAgICBwbGF5ZXIueCArPSBwbGF5ZXIuc3BlZWQgKiBtb2Q7XHJcbiAgICAgICAgcGxheWVyLnN0YXRlID0gMjtcclxuICAgICAgICBpZihwbGF5ZXIueCA+PSAoY2FudmFzQi53aWR0aC00MCkgKSBwbGF5ZXIueCA9IGNhbnZhc0Iud2lkdGgtNDE7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDEwOyBpKyspe1xyXG4gICAgICAgIEFycmF5W2ldLnkgLT0gc3BlZWQ7XHJcbiAgICB9XHJcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcclxuICAgICAgICBpZigocGxheWVyLnkgPD0gQXJyYXlbaV0ueSAgJiZwbGF5ZXIueSA+PSBBcnJheVtpXS55IC00MCApJiYgcGxheWVyLnggPkFycmF5W2ldLngtMjAgJiYgcGxheWVyLnggPCBBcnJheVtpXS54ICsxNTApe1xyXG4gICAgICAgICAgICB1cCA9MTtcclxuICAgICAgICAgICAgbV95ID0gaTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgdXAgPSAwO1xyXG4gICAgfVx0XHJcbiAgICBpZih1cCA9PSAxKXtcclxuICAgICAgICBwbGF5ZXIueSA9IEFycmF5W21feV0ueS00MDtcclxuICAgICAgICBpZihBcnJheVttX3ldLm1vZCA9PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMCAmJnBsYXllci5saWZlPCBmdWxsbGlmZSApIHBsYXllci5saWZlKys7XHJcbiAgICAgICAgICAgIC8vIGZsYWcgPSAxO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc3BlZWQ9bXMvMztcclxuICAgICAgICB9ZWxzZSBpZiAoQXJyYXlbbV95XS5tb2QgPT0gMil7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMClwbGF5ZXIubGlmZSAtPSA1O1xyXG4gICAgICAgICAgICAvLyBmbGFnID0gMTtcclxuICAgICAgICAgICAgcGxheWVyLnNwZWVkID0gbXM7XHJcbiAgICAgICAgfWVsc2UgaWYoQXJyYXlbbV95XS5tb2QgPT0gMyl7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMCAmJnBsYXllci5saWZlPCBmdWxsbGlmZSApIHBsYXllci5saWZlKys7XHJcbiAgICAgICAgICAgIHBsYXllci5zcGVlZCA9IG1zKjEuNTtcclxuICAgICAgICAgICAgcGxheWVyLnkgLT0gMTAwO1xyXG4gICAgICAgICAgICAvLyBmbGFnID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmKGZsYWcgPT0gMCAmJnBsYXllci5saWZlPCBmdWxsbGlmZSApIHBsYXllci5saWZlKys7XHJcbiAgICAgICAgICAgIHBsYXllci5zcGVlZCA9bXM7XHJcbiAgICAgICAgICAgIC8vIGZsYWcgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cdFxyXG4gICAgZWxzZSAge1xyXG4gICAgICAgIGlmKCBwbGF5ZXIueTwzNSApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwbGF5ZXIubGlmZSAtPSA1O1xyXG4gICAgICAgICAgICBwbGF5ZXIueSA9IDM1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5ZXIueSArPSAxMDtcclxuICAgICAgICBwbGF5ZXIuc3BlZWQgPW1zO1xyXG4gICAgICAgIC8vIGZsYWcgPSAwO1xyXG4gICAgfVxyXG4gICAgLy8gaWYocGxheWVyLnkgPiBjYW52YXNCLmhlaWdodCB8fCBwbGF5ZXIubGlmZSA8PTApIHtcclxuICAgIC8vICAgICBnYW1lID0gMDtcclxuICAgIC8vICAgICBlbmQgPSAxO1xyXG4gICAgLy8gfVxyXG4gICAgLy9jb25zb2xlLmxvZyhmbGFnK1wiICBcIitwbGF5ZXIubGlmZSArIFwiICAgXCIgKyBwbGF5ZXIuc3BlZWQpO1xyXG4gICAgaWYocGxheWVyLnN0YWlyID4gOTUpIHNwZWVkID0gMTU7XHJcbiAgICBlbHNlIGlmKHBsYXllci5zdGFpciA+IDgwKSBzcGVlZCA9IDE0O1xyXG4gICAgZWxzZSBpZihwbGF5ZXIuc3RhaXIgPiA2NSkgc3BlZWQgPSAxMjtcclxuICAgIGVsc2UgaWYocGxheWVyLnN0YWlyID4gNTApIHNwZWVkID0gMTA7XHJcbiAgICBlbHNlIGlmKHBsYXllci5zdGFpciA+IDM1KSBzcGVlZCA9IDk7XHJcbiAgICBlbHNlIGlmKHBsYXllci5zdGFpciA+IDIwKSBzcGVlZCA9IDg7XHJcbiAgICBmb3IobGV0IGkgPSAwIDsgaSA8IDEwIDsgaSsrKXtcclxuICAgICAgICBpZiggQXJyYXlbaV0ueSA8PSAzMCApe1xyXG4gICAgICAgICAgICBBcnJheVtpXS55ID0gY2FudmFzQi5oZWlnaHQgKyAoTWF0aC5yYW5kb20oKSoxMCsxKSooTWF0aC5yYW5kb20oKSo1MCs1MCkgKyAyMDA7XHJcbiAgICAgICAgICAgIEFycmF5W2ldLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzQi53aWR0aC0xMDA7XHJcbiAgICAgICAgICAgIC8vLyBBdm9pZCBPdmVybGFwcGluZ1xyXG4gICAgICAgICAgICB3aGlsZSgxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBcnJheVtpXS55ID0gY2FudmFzQi5oZWlnaHQgKyAoTWF0aC5yYW5kb20oKSoxMCsxKSooTWF0aC5yYW5kb20oKSo1MCs1MCkgKyAyMDA7XHJcbiAgICAgICAgICAgICAgICBBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhc0Iud2lkdGgtMTAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG92ZXJsYXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDAgOyBqIDwgMTAgOyBqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGk9PWogKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggKE1hdGguYWJzKEFycmF5W2ldLngtQXJyYXlbal0ueCk8PTIwMCkgJiYgKE1hdGguYWJzKEFycmF5W2ldLnktQXJyYXlbal0ueSk8PTYwKSAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvdmVybGFwIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvdmVybGFwKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvdmVybGFwKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgfVx0XHJcbiAgICB9XHJcbiAgICAvL31cclxufVxyXG5mdW5jdGlvbiBydW4oKSB7XHJcbiAgICB1cGRhdGUoKERhdGUubm93KCkgLSB0aW1lKSAvIDEwMDApO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICB0aW1lID0gRGF0ZS5ub3coKTtcclxufVxyXG5cclxudmFyIHRpbWUgPSBEYXRlLm5vdygpO1xyXG5zZXRJbnRlcnZhbChydW4sIDQwKTtcclxuXHJcbmxldCBBcnJheSA9IFtdO1xyXG5BcnJheVswXSA9IG5ldyBCbG9ja09iaigxNTAsNjAwKTtcclxuZm9yKCBsZXQgaSA9IDEgOyBpIDwgMTAgOyBpKyspe1xyXG4gICAgLy8gbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzQi53aWR0aC0xMDA7XHJcbiAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAzODA7XHJcbiAgICBsZXQgZGUgPSAoTWF0aC5yYW5kb20oKSAqIDEwKzEwK2kqNCkqNDAgO1xyXG4gICAgLy8vIEF2b2lkIE92ZXJsYXBwaW5nXHJcbiAgICB3aGlsZSgxKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHIgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzQi53aWR0aC0xMDA7XHJcbiAgICAgICAgciA9IE1hdGgucmFuZG9tKCkgKiAzODA7XHJcbiAgICAgICAgZGUgPSAoTWF0aC5yYW5kb20oKSAqIDEwKzEwK2kqNCkqNDAgO1xyXG4gICAgICAgIGxldCBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMCA7IGogPCBpIDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaT09aikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKCAoTWF0aC5hYnMoci1BcnJheVtqXS54KTw9MjAwKSAmJiAoTWF0aC5hYnMoZGUtQXJyYXlbal0ueSk8PTYwKSAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdmVybGFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvdmVybGFwIVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFvdmVybGFwKSBicmVhaztcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGlmKGkgPT0gMyB8fCBpID09IDkgKSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxuICAgIGVsc2UgaWYgKCBpID09IDIgfHwgaSA9PSA3KSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxuICAgIGVsc2UgaWYgKCBpID09IDUgKSBBcnJheVtpXSA9IG5ldyBKX0Jsb2NrT2JqKHIsZGUpO1xyXG4gICAgZWxzZSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUGxheWVyT2JqIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJsaWZlIiwic3RhaXIiLCJzdGF0ZSIsImNvbG9yIiwiQmxvY2tPYmoiLCJhIiwiYiIsIm1vZCIsIkpfQmxvY2tPYmoiLCJEX0Jsb2NrT2JqIiwic3RhdHVzU3QiLCJiZ3BpYyIsIkltYWdlIiwic3JjIiwidG9wcGljIiwic3RhbmQiLCJibG9ja1BpYyIsImpfYmxvY2tQaWMiLCJsZWZ0cGljIiwicmlnaHRwaWMiLCJjYW52YXNCIiwiY3R4QiIsImNhbnZhc00iLCJjdHhNIiwiZ2FtZVN0YXR1cyIsInBsYXllciIsImtleXNEb3duIiwidXAiLCJ1cDIiLCJkb3duIiwiZG93bjIiLCJtX3kiLCJtX3kyIiwiZmxhZzMiLCJsZWZ0TW92ZSIsInJpZ2h0TW92ZSIsInIiLCJtcyIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwidG91Y2hlcyIsInRvdSIsInQiLCJwYWdlWCIsImRyYXdJbWFnZSIsImkiLCJBcnJheSIsInNwaWMiLCJrcGljIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ1cGRhdGUiLCJNYXRoIiwicmFuZG9tIiwib3ZlcmxhcCIsImoiLCJhYnMiLCJydW4iLCJEYXRlIiwibm93IiwidGltZSIsInNldEludGVydmFsIiwiZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///755\n')},335:function(){eval("// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM1LmpzIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnMtc2hhZnQtbm9kZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///335\n")}};__webpack_modules__[755]();var __webpack_exports__={};__webpack_modules__[335]()})();