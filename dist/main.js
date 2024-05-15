(function(){"use strict";var __webpack_modules__={755:function(){eval('\n;// CONCATENATED MODULE: ./src/script/player.js\n//const maxLife = 3;\n\nclass PlayerObj {\n  constructor() {\n    this.x = 200;\n    this.y = 300;\n    this.width = 40;\n    this.height = 40;\n    this.speed = 200;\n    this.life = 3;\n    this.stair = 0;\n    this.state = 0;\n    this.color = \'#FF8000\';\n  }\n}\n/* harmony default export */ var player = (PlayerObj);\n;// CONCATENATED MODULE: ./src/script/block.js\nclass BlockObj {\n  constructor(a, b) {\n    this.x = a;\n    this.y = b;\n    this.width = 150;\n    this.height = 30;\n    this.mod = 0;\n    this.color = \'#198e99\';\n  }\n}\n/* harmony default export */ var block = (BlockObj);\n;// CONCATENATED MODULE: ./src/script/j_Block.js\nclass J_BlockObj {\n  constructor(a, b) {\n    this.x = a;\n    this.y = b;\n    this.width = 150;\n    this.height = 30;\n    this.mod = 3;\n    this.color = \'#FFFF00\';\n  }\n}\n;\n/* harmony default export */ var j_Block = (J_BlockObj);\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\n//--------param\nconst statusSt = \'Start\';\nconst bgpic = new Image();\nbgpic.src = "./assets/bg.jpg";\nconst toppic = new Image();\ntoppic.src = "./assets/top.jpg";\nconst stand = new Image();\nstand.src = "./assets/1.png";\nconst blockPic = new Image();\nblockPic.src = "./assets/block.jpg";\nconst j_blockPic = new Image();\nj_blockPic.src = "./assets/jblock.jpg";\nconst leftpic = new Image();\nleftpic.src = "./assets/left.png";\nconst rightpic = new Image();\nrightpic.src = "./assets/right.png";\nlet canvasB, ctxB, canvasM, ctxM;\nlet gameStatus = statusSt;\nlet src_player = new player();\n\n//-------------------------\nfunction render() {\n  canvasB = document.getElementById(\'canvasBoard\');\n  ctxB = canvasB.getContext(\'2d\');\n  canvasM = document.getElementById(\'canvasMove\');\n  ctxM = canvasM.getContext(\'2d\');\n  canvasB.width = 480;\n  canvasB.height = 740;\n  canvasM.width = 480;\n  canvasM.height = 300;\n  if (gameStatus == statusSt) {\n    ctxB.drawImage(bgpic, 0, 0, canvasB.width, canvasB.height);\n    if (src_player.state == 0) ctxB.drawImage(stand, src_player.x, src_player.y, src_player.width, src_player.height);else if (src_player.state == 1) {\n      ctxB.drawImage(leftpic, a, 0, src_player.width, src_player.height, src_player.x, src_player.y, src_player.width, src_player.height);\n      a += 50;\n      if (a >= 200) a = 0;\n    } else if (src_player.state == 2) {\n      ctxB.drawImage(rightpic, b, 0, src_player.width, src_player.height, src_player.x, src_player.y, src_player.width, src_player.height);\n      b += 50;\n      if (b >= 200) b = 0;\n    }\n    ctxB.drawImage(toppic, 0, 0, canvasB.width, 40);\n    for (let i = 0; i < 10; i++) {\n      if (src_Array[i].mod == 0) ctxB.drawImage(blockPic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 1) ctxB.drawImage(spic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 2) ctxB.drawImage(kpic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else if (src_Array[i].mod == 3) ctxB.drawImage(j_blockPic, src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);else {\n        ctxB.fillStyle = src_Array[i].color;\n        ctxB.fillRect(src_Array[i].x, src_Array[i].y, src_Array[i].width, src_Array[i].height);\n      }\n    }\n  }\n}\nfunction update(mod) {\n  if (game == 1) {\n    if (37 in keysDown && man.x >= 0 && man.x < canvas.width - 40) {\n      man.x -= man.speed * mod;\n      man.state = 1;\n      if (man.x <= 0) man.x = 1;\n    } else if (39 in keysDown && man.x >= 0 && man.x < canvas.width - 40) {\n      man.x += man.speed * mod;\n      man.state = 2;\n      if (man.x >= canvas.width - 40) man.x = canvas.width - 41;\n    } else if (mouse == 0 && tou == 0) man.state = 0;\n    for (i = 0; i < 10; i++) {\n      src_Array[i].y -= speed;\n    }\n    for (i = 0; i < 10; i++) {\n      if (man.y <= src_Array[i].y && man.y >= src_Array[i].y - 40 && man.x > src_Array[i].x - 20 && man.x < src_Array[i].x + 150) {\n        up = 1;\n        m_y = i;\n        break;\n      } else up = 0;\n    }\n    if (up == 1) {\n      man.y = src_Array[m_y].y - 40;\n      if (src_Array[m_y].mod == 1) {\n        if (flag == 0 && man.life < fulllife) man.life++;\n        flag = 1;\n        man.speed = ms / 3;\n      } else if (src_Array[m_y].mod == 2) {\n        if (flag == 0) man.life -= 5;\n        flag = 1;\n        man.speed = ms;\n      } else if (src_Array[m_y].mod == 3) {\n        if (flag == 0 && man.life < fulllife) man.life++;\n        man.speed = ms * 1.5;\n        man.y -= 100;\n        flag = 1;\n      } else {\n        if (flag == 0 && man.life < fulllife) man.life++;\n        man.speed = ms;\n        flag = 1;\n      }\n    } else {\n      if (man.y < 35) {\n        man.life -= 5;\n        man.y = 35;\n      }\n      man.y += 10;\n      man.speed = ms;\n      flag = 0;\n    }\n    if (man.y > canvas.height || man.life <= 0) {\n      game = 0;\n      end = 1;\n    }\n    //console.log(flag+"  "+man.life + "   " + man.speed);\n    if (man.stair > 95) speed = 15;else if (man.stair > 80) speed = 14;else if (man.stair > 65) speed = 12;else if (man.stair > 50) speed = 10;else if (man.stair > 35) speed = 9;else if (man.stair > 20) speed = 8;\n    for (i = 0; i < 10; i++) {\n      if (src_Array[i].y <= 30) {\n        src_Array[i].y = canvas.height + (Math.random() * 10 + 1) * (Math.random() * 50 + 50) + 200;\n        src_Array[i].x = Math.random() * canvas.width - 100;\n        /// Avoid Overlapping\n        while (1) {\n          src_Array[i].y = canvas.height + (Math.random() * 10 + 1) * (Math.random() * 50 + 50) + 200;\n          src_Array[i].x = Math.random() * canvas.width - 100;\n          var overlap = false;\n          for (j = 0; j < 10; j++) {\n            if (i == j) continue;\n            if (Math.abs(src_Array[i].x - src_Array[j].x) <= 200 && Math.abs(src_Array[i].y - src_Array[j].y) <= 60) {\n              overlap = true;\n              //console.log("overlap!");\n              break;\n            }\n          }\n          //console.log(overlap);\n          if (!overlap) break;\n        }\n        /////////////////////////////////////\n      }\n    }\n  }\n}\nfunction run() {\n  // update((Date.now() - time) / 1000);\n  render();\n  time = Date.now();\n}\nvar time = Date.now();\nsetInterval(run, 40);\nlet src_Array = [];\nsrc_Array[0] = new block(150, 600);\nfor (let i = 1; i < 10; i++) {\n  // let r = Math.random() * canvasB.width-100;\n  let r = Math.random() * 380;\n  let de = (Math.random() * 10 + 10 + i * 4) * 40;\n  /// Avoid Overlapping\n  while (1) {\n    // r = Math.random() * canvasB.width-100;\n    r = Math.random() * 380;\n    de = (Math.random() * 10 + 10 + i * 4) * 40;\n    let overlap = false;\n    for (let j = 0; j < i; j++) {\n      if (i == j) continue;\n      if (Math.abs(r - src_Array[j].x) <= 200 && Math.abs(de - src_Array[j].y) <= 60) {\n        overlap = true;\n        //console.log("overlap!");\n        break;\n      }\n    }\n    if (!overlap) break;\n  }\n  /////////////////////////////////////\n  if (i == 3 || i == 9) src_Array[i] = new block(r, de);else if (i == 2 || i == 7) src_Array[i] = new block(r, de);else if (i == 5) src_Array[i] = new j_Block(r, de);else src_Array[i] = new block(r, de);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0o7SUFDQSxJQUFHLENBQUNBLE9BQU8sRUFBRTtFQUNqQjtFQUNBO0VBQ0EsSUFBR3JCLENBQUMsSUFBSSxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLEVBQUdDLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLEdBQUcsSUFBSTNCLEtBQVEsQ0FBQ3dELENBQUMsRUFBQ0MsRUFBRSxDQUFDLENBQUMsS0FDL0MsSUFBSzlCLENBQUMsSUFBSSxDQUFDLElBQUlBLENBQUMsSUFBSSxDQUFDLEVBQUVDLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLEdBQUcsSUFBSTNCLEtBQVEsQ0FBQ3dELENBQUMsRUFBQ0MsRUFBRSxDQUFDLENBQUMsS0FDckQsSUFBSzlCLENBQUMsSUFBSSxDQUFDLEVBQUdDLFNBQUssQ0FBQ0QsQ0FBQyxDQUFDLEdBQUcsSUFBSXZCLE9BQVUsQ0FBQ29ELENBQUMsRUFBQ0MsRUFBRSxDQUFDLENBQUMsS0FDOUM3QixTQUFLLENBQUNELENBQUMsQ0FBQyxHQUFHLElBQUkzQixLQUFRLENBQUN3RCxDQUFDLEVBQUNDLEVBQUUsQ0FBQztBQUN0QyIsInNvdXJjZXMiOlsid2VicGFjazovL25zLXNoYWZ0LW5vZGUvLi9zcmMvc2NyaXB0L3BsYXllci5qcz84YTAyIiwid2VicGFjazovL25zLXNoYWZ0LW5vZGUvLi9zcmMvc2NyaXB0L2Jsb2NrLmpzP2M4MjYiLCJ3ZWJwYWNrOi8vbnMtc2hhZnQtbm9kZS8uL3NyYy9zY3JpcHQval9CbG9jay5qcz9jMmJiIiwid2VicGFjazovL25zLXNoYWZ0LW5vZGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2NvbnN0IG1heExpZmUgPSAzO1xyXG5cclxuY2xhc3MgUGxheWVyT2Jqe1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnggPSAyMDA7IFxyXG4gICAgICAgIHRoaXMueT0gMzAwOyAgIFxyXG4gICAgICAgIHRoaXMud2lkdGg9IDQwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PSA0MDsgIFxyXG4gICAgICAgIHRoaXMuc3BlZWQ9IDIwMDsgICBcclxuICAgICAgICB0aGlzLmxpZmU9IDM7XHJcbiAgICAgICAgdGhpcy5zdGFpcj0wOyAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RhdGU9MDtcclxuICAgICAgICB0aGlzLmNvbG9yPSAnI0ZGODAwMCc7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJPYmo7ICIsImNsYXNzIEJsb2NrT2Jqe1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihhLGIpIHtcclxuICAgICAgICB0aGlzLng9IGE7XHJcbiAgICAgICAgdGhpcy55PSBiO1xyXG4gICAgICAgIHRoaXMud2lkdGg9IDE1MDtcclxuICAgICAgICB0aGlzLmhlaWdodD0gMzA7XHJcbiAgICAgICAgdGhpcy5tb2QgPSAwO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSAnIzE5OGU5OSc7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja09iajsgIiwiY2xhc3MgSl9CbG9ja09iantcclxuICAgIGNvbnN0cnVjdG9yKGEsYikge1xyXG4gICAgICAgIHRoaXMueD0gYTtcclxuICAgICAgICB0aGlzLnk9IGI7XHJcbiAgICAgICAgdGhpcy53aWR0aD0gMTUwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0PSAzMDtcclxuICAgICAgICB0aGlzLm1vZCA9IDM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9ICcjRkZGRjAwJztcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEpfQmxvY2tPYmo7IFxyXG4iLCJpbXBvcnQgUGxheWVyT2JqIGZyb20gXCIuL3NjcmlwdC9wbGF5ZXIuanNcIlxyXG5pbXBvcnQgQmxvY2tPYmogZnJvbSBcIi4vc2NyaXB0L2Jsb2NrLmpzXCI7XHJcbmltcG9ydCBKX0Jsb2NrT2JqIGZyb20gXCIuL3NjcmlwdC9qX0Jsb2NrLmpzXCI7XHJcbmltcG9ydCBEX0Jsb2NrT2JqIGZyb20gXCIuL3NjcmlwdC9kX0Jsb2NrLmpzXCI7XHJcblxyXG4vLy0tLS0tLS0tcGFyYW1cclxuY29uc3Qgc3RhdHVzU3QgPSAnU3RhcnQnO1xyXG5cclxuY29uc3QgYmdwaWM9bmV3IEltYWdlKCk7XHJcblx0XHRiZ3BpYy5zcmM9XCIuL2Fzc2V0cy9iZy5qcGdcIjtcclxuY29uc3QgdG9wcGljPW5ldyBJbWFnZSgpO1xyXG5cdFx0IHRvcHBpYy5zcmM9XCIuL2Fzc2V0cy90b3AuanBnXCI7XHJcbmNvbnN0IHN0YW5kPW5ldyBJbWFnZSgpO1xyXG5cdFx0IHN0YW5kLnNyYz1cIi4vYXNzZXRzLzEucG5nXCI7XHJcbmNvbnN0IGJsb2NrUGljPW5ldyBJbWFnZSgpO1xyXG5cdFx0YmxvY2tQaWMuc3JjPVwiLi9hc3NldHMvYmxvY2suanBnXCI7XHJcbmNvbnN0IGpfYmxvY2tQaWM9bmV3IEltYWdlKCk7XHJcblx0XHRqX2Jsb2NrUGljLnNyYz1cIi4vYXNzZXRzL2pibG9jay5qcGdcIjtcclxuY29uc3QgbGVmdHBpYz1uZXcgSW1hZ2UoKTtcclxuXHRcdGxlZnRwaWMuc3JjPVwiLi9hc3NldHMvbGVmdC5wbmdcIjtcclxuY29uc3QgcmlnaHRwaWM9bmV3IEltYWdlKCk7XHJcblx0XHRyaWdodHBpYy5zcmM9XCIuL2Fzc2V0cy9yaWdodC5wbmdcIjtcclxubGV0IGNhbnZhc0IsY3R4QixjYW52YXNNLGN0eE07XHJcblxyXG5cclxuXHJcbmxldCBnYW1lU3RhdHVzID0gc3RhdHVzU3Q7XHJcbmxldCBwbGF5ZXIgPSBuZXcgUGxheWVyT2JqKCk7XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICAgIGNhbnZhc0IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzQm9hcmQnKTtcclxuICAgIGN0eEIgPSBjYW52YXNCLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICBjYW52YXNNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhc01vdmUnKTsgXHJcbiAgICBjdHhNID0gY2FudmFzTS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY2FudmFzQi53aWR0aCA9IDQ4MDtcclxuICAgIGNhbnZhc0IuaGVpZ2h0ID0gNzQwO1xyXG4gICAgY2FudmFzTS53aWR0aCA9IDQ4MDtcclxuICAgIGNhbnZhc00uaGVpZ2h0ID0gMzAwO1xyXG4gICAgaWYoZ2FtZVN0YXR1cyA9PSBzdGF0dXNTdCApe1xyXG4gICAgICAgIGN0eEIuZHJhd0ltYWdlKGJncGljLDAsMCxjYW52YXNCLndpZHRoLGNhbnZhc0IuaGVpZ2h0KTtcclxuICAgICAgICBpZihwbGF5ZXIuc3RhdGUgPT0gMCApIFxyXG4gICAgICAgICAgICBjdHhCLmRyYXdJbWFnZShzdGFuZCxwbGF5ZXIueCxwbGF5ZXIueSxwbGF5ZXIud2lkdGgscGxheWVyLmhlaWdodCk7XHJcbiAgICAgICAgZWxzZSBpZihwbGF5ZXIuc3RhdGUgPT0gMSl7XHJcbiAgICAgICAgICAgIGN0eEIuZHJhd0ltYWdlKGxlZnRwaWMsYSwwLHBsYXllci53aWR0aCxwbGF5ZXIuaGVpZ2h0LHBsYXllci54LHBsYXllci55LHBsYXllci53aWR0aCxwbGF5ZXIuaGVpZ2h0KTtcclxuICAgICAgICAgICAgYSs9NTA7XHJcbiAgICAgICAgICAgIGlmKGEgPj0gMjAwKSBhID0wO1xyXG4gICAgICAgIH1cdFxyXG4gICAgICAgIGVsc2UgaWYocGxheWVyLnN0YXRlID09IDIpe1xyXG4gICAgICAgICAgICBjdHhCLmRyYXdJbWFnZShyaWdodHBpYyxiLDAscGxheWVyLndpZHRoLHBsYXllci5oZWlnaHQscGxheWVyLngscGxheWVyLnkscGxheWVyLndpZHRoLHBsYXllci5oZWlnaHQpO1xyXG4gICAgICAgICAgICBiICs9NTA7XHJcbiAgICAgICAgICAgIGlmKGIgPj0gMjAwKSBiID0wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHhCLmRyYXdJbWFnZSh0b3BwaWMsMCwwLGNhbnZhc0Iud2lkdGgsNDApO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDAgOyBpIDwgMTAgOyBpKyspe1xyXG4gICAgICAgICAgICBpZihBcnJheVtpXS5tb2QgPT0gMCkgY3R4Qi5kcmF3SW1hZ2UoYmxvY2tQaWMsQXJyYXlbaV0ueCwgQXJyYXlbaV0ueSwgQXJyYXlbaV0ud2lkdGgsIEFycmF5W2ldLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgIChBcnJheVtpXS5tb2QgPT0gMSkgY3R4Qi5kcmF3SW1hZ2Uoc3BpYyxBcnJheVtpXS54LCBBcnJheVtpXS55LCBBcnJheVtpXS53aWR0aCwgQXJyYXlbaV0uaGVpZ2h0KTtcclxuICAgICAgICAgICAgZWxzZSBpZiAgKEFycmF5W2ldLm1vZCA9PSAyKSBjdHhCLmRyYXdJbWFnZShrcGljLEFycmF5W2ldLngsIEFycmF5W2ldLnksIEFycmF5W2ldLndpZHRoLCBBcnJheVtpXS5oZWlnaHQpO1xyXG4gICAgICAgICAgICBlbHNlIGlmICAoQXJyYXlbaV0ubW9kID09IDMpIGN0eEIuZHJhd0ltYWdlKGpfYmxvY2tQaWMsQXJyYXlbaV0ueCwgQXJyYXlbaV0ueSwgQXJyYXlbaV0ud2lkdGgsIEFycmF5W2ldLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjdHhCLmZpbGxTdHlsZSA9IEFycmF5W2ldLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgY3R4Qi5maWxsUmVjdChBcnJheVtpXS54LCBBcnJheVtpXS55LCBBcnJheVtpXS53aWR0aCwgQXJyYXlbaV0uaGVpZ2h0KTtcclxuICAgICAgICAgICAgfVx0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlKG1vZCkge1xyXG4gICAgaWYoZ2FtZSA9PSAxKXtcclxuICAgIGlmICgzNyBpbiBrZXlzRG93biAmJiBtYW4ueCA+PSAwICYmIG1hbi54IDwgKGNhbnZhcy53aWR0aC00MCkgKSB7XHJcbiAgICAgICAgbWFuLnggLT0gbWFuLnNwZWVkICogbW9kO1xyXG4gICAgICAgIG1hbi5zdGF0ZSA9IDE7XHJcbiAgICAgICAgaWYobWFuLnggPD0gMCkgbWFuLnggPSAxO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoMzkgaW4ga2V5c0Rvd24gJiYgbWFuLnggPj0gMCAmJiBtYW4ueCA8IChjYW52YXMud2lkdGgtNDApKSB7XHJcbiAgICAgICAgbWFuLnggKz0gbWFuLnNwZWVkICogbW9kO1xyXG4gICAgICAgIG1hbi5zdGF0ZSA9IDI7XHJcbiAgICAgICAgaWYobWFuLnggPj0gKGNhbnZhcy53aWR0aC00MCkgKSBtYW4ueCA9IGNhbnZhcy53aWR0aC00MTtcclxuICAgIH1lbHNlIGlmKG1vdXNlID09IDAgJiYgdG91ID09IDApbWFuLnN0YXRlID0gMDtcclxuICAgIGZvcihpID0gMCA7IGkgPCAxMDsgaSsrKXtcclxuICAgICAgICBBcnJheVtpXS55IC09IHNwZWVkO1xyXG4gICAgfVxyXG4gICAgZm9yKCBpID0gMCA7IGkgPCAxMCA7IGkrKyl7XHJcbiAgICAgICAgaWYoKG1hbi55IDw9IEFycmF5W2ldLnkgICYmbWFuLnkgPj0gQXJyYXlbaV0ueSAtNDAgKSYmIG1hbi54ID5BcnJheVtpXS54LTIwICYmIG1hbi54IDwgQXJyYXlbaV0ueCArMTUwKXtcclxuICAgICAgICAgICAgdXAgPTE7XHJcbiAgICAgICAgICAgIG1feSA9IGk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHVwID0gMDtcclxuICAgIH1cdFxyXG4gICAgaWYodXAgPT0gMSl7XHJcbiAgICAgICAgbWFuLnkgPSBBcnJheVttX3ldLnktNDA7XHJcbiAgICAgICAgaWYoQXJyYXlbbV95XS5tb2QgPT0gMSkge1xyXG4gICAgICAgICAgICBpZihmbGFnID09IDAgJiZtYW4ubGlmZTwgZnVsbGxpZmUgKSBtYW4ubGlmZSsrO1xyXG4gICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICAgICAgbWFuLnNwZWVkPW1zLzM7XHJcbiAgICAgICAgfWVsc2UgaWYgKEFycmF5W21feV0ubW9kID09IDIpe1xyXG4gICAgICAgICAgICBpZihmbGFnID09IDApbWFuLmxpZmUgLT0gNTtcclxuICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgICAgIG1hbi5zcGVlZCA9IG1zO1xyXG4gICAgICAgIH1lbHNlIGlmKEFycmF5W21feV0ubW9kID09IDMpe1xyXG4gICAgICAgICAgICBpZihmbGFnID09IDAgJiZtYW4ubGlmZTwgZnVsbGxpZmUgKSBtYW4ubGlmZSsrO1xyXG4gICAgICAgICAgICBtYW4uc3BlZWQgPSBtcyoxLjU7XHJcbiAgICAgICAgICAgIG1hbi55IC09IDEwMDtcclxuICAgICAgICAgICAgZmxhZyA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZihmbGFnID09IDAgJiZtYW4ubGlmZTwgZnVsbGxpZmUgKSBtYW4ubGlmZSsrO1xyXG4gICAgICAgICAgICBtYW4uc3BlZWQgPW1zO1xyXG4gICAgICAgICAgICBmbGFnID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHRcclxuICAgIGVsc2UgIHtcclxuICAgICAgICBpZiggbWFuLnk8MzUgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFuLmxpZmUgLT0gNTtcclxuICAgICAgICAgICAgbWFuLnkgPSAzNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFuLnkgKz0gMTA7XHJcbiAgICAgICAgbWFuLnNwZWVkID1tcztcclxuICAgICAgICBmbGFnID0gMDtcclxuICAgIH1cclxuICAgIGlmKG1hbi55ID4gY2FudmFzLmhlaWdodCB8fCBtYW4ubGlmZSA8PTApIHtcclxuICAgICAgICBnYW1lID0gMDtcclxuICAgICAgICBlbmQgPSAxO1xyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyhmbGFnK1wiICBcIittYW4ubGlmZSArIFwiICAgXCIgKyBtYW4uc3BlZWQpO1xyXG4gICAgaWYobWFuLnN0YWlyID4gOTUpIHNwZWVkID0gMTU7XHJcbiAgICBlbHNlIGlmKG1hbi5zdGFpciA+IDgwKSBzcGVlZCA9IDE0O1xyXG4gICAgZWxzZSBpZihtYW4uc3RhaXIgPiA2NSkgc3BlZWQgPSAxMjtcclxuICAgIGVsc2UgaWYobWFuLnN0YWlyID4gNTApIHNwZWVkID0gMTA7XHJcbiAgICBlbHNlIGlmKG1hbi5zdGFpciA+IDM1KSBzcGVlZCA9IDk7XHJcbiAgICBlbHNlIGlmKG1hbi5zdGFpciA+IDIwKSBzcGVlZCA9IDg7XHJcbiAgICBmb3IoaSA9IDAgOyBpIDwgMTAgOyBpKyspe1xyXG4gICAgICAgIGlmKCBBcnJheVtpXS55IDw9IDMwICl7XHJcbiAgICAgICAgICAgIEFycmF5W2ldLnkgPSBjYW52YXMuaGVpZ2h0ICsgKE1hdGgucmFuZG9tKCkqMTArMSkqKE1hdGgucmFuZG9tKCkqNTArNTApICsgMjAwO1xyXG4gICAgICAgICAgICBBcnJheVtpXS54ID0gTWF0aC5yYW5kb20oKSAqIGNhbnZhcy53aWR0aC0xMDA7XHJcbiAgICAgICAgICAgIC8vLyBBdm9pZCBPdmVybGFwcGluZ1xyXG4gICAgICAgICAgICB3aGlsZSgxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBBcnJheVtpXS55ID0gY2FudmFzLmhlaWdodCArIChNYXRoLnJhbmRvbSgpKjEwKzEpKihNYXRoLnJhbmRvbSgpKjUwKzUwKSArIDIwMDtcclxuICAgICAgICAgICAgICAgIEFycmF5W2ldLnggPSBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoLTEwMDtcclxuICAgICAgICAgICAgICAgIHZhciBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IoaiA9IDAgOyBqIDwgMTAgOyBqKyspXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIGk9PWogKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiggKE1hdGguYWJzKEFycmF5W2ldLngtQXJyYXlbal0ueCk8PTIwMCkgJiYgKE1hdGguYWJzKEFycmF5W2ldLnktQXJyYXlbal0ueSk8PTYwKSAgKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxhcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvdmVybGFwIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvdmVybGFwKTtcclxuICAgICAgICAgICAgICAgIGlmKCFvdmVybGFwKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgfVx0XHJcbiAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcnVuKCkge1xyXG4gICAvLyB1cGRhdGUoKERhdGUubm93KCkgLSB0aW1lKSAvIDEwMDApO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICB0aW1lID0gRGF0ZS5ub3coKTtcclxufVxyXG5cclxudmFyIHRpbWUgPSBEYXRlLm5vdygpO1xyXG5zZXRJbnRlcnZhbChydW4sIDQwKTtcclxuXHJcbmxldCBBcnJheSA9IFtdO1xyXG5BcnJheVswXSA9IG5ldyBCbG9ja09iaigxNTAsNjAwKTtcclxuZm9yKCBsZXQgaSA9IDEgOyBpIDwgMTAgOyBpKyspe1xyXG4gICAgLy8gbGV0IHIgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzQi53aWR0aC0xMDA7XHJcbiAgICBsZXQgciA9IE1hdGgucmFuZG9tKCkgKiAzODA7XHJcbiAgICBsZXQgZGUgPSAoTWF0aC5yYW5kb20oKSAqIDEwKzEwK2kqNCkqNDAgO1xyXG4gICAgLy8vIEF2b2lkIE92ZXJsYXBwaW5nXHJcbiAgICB3aGlsZSgxKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHIgPSBNYXRoLnJhbmRvbSgpICogY2FudmFzQi53aWR0aC0xMDA7XHJcbiAgICAgICAgciA9IE1hdGgucmFuZG9tKCkgKiAzODA7XHJcbiAgICAgICAgZGUgPSAoTWF0aC5yYW5kb20oKSAqIDEwKzEwK2kqNCkqNDAgO1xyXG4gICAgICAgIGxldCBvdmVybGFwID0gZmFsc2U7XHJcbiAgICAgICAgZm9yKGxldCBqID0gMCA7IGogPCBpIDsgaisrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaT09aikgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKCAoTWF0aC5hYnMoci1BcnJheVtqXS54KTw9MjAwKSAmJiAoTWF0aC5hYnMoZGUtQXJyYXlbal0ueSk8PTYwKSAgKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvdmVybGFwID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJvdmVybGFwIVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFvdmVybGFwKSBicmVhaztcclxuICAgIH1cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgIGlmKGkgPT0gMyB8fCBpID09IDkgKSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxuICAgIGVsc2UgaWYgKCBpID09IDIgfHwgaSA9PSA3KSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxuICAgIGVsc2UgaWYgKCBpID09IDUgKSBBcnJheVtpXSA9IG5ldyBKX0Jsb2NrT2JqKHIsZGUpO1xyXG4gICAgZWxzZSBBcnJheVtpXSA9IG5ldyBCbG9ja09iaihyLGRlKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUGxheWVyT2JqIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BlZWQiLCJsaWZlIiwic3RhaXIiLCJzdGF0ZSIsImNvbG9yIiwiQmxvY2tPYmoiLCJhIiwiYiIsIm1vZCIsIkpfQmxvY2tPYmoiLCJEX0Jsb2NrT2JqIiwic3RhdHVzU3QiLCJiZ3BpYyIsIkltYWdlIiwic3JjIiwidG9wcGljIiwic3RhbmQiLCJibG9ja1BpYyIsImpfYmxvY2tQaWMiLCJsZWZ0cGljIiwicmlnaHRwaWMiLCJjYW52YXNCIiwiY3R4QiIsImNhbnZhc00iLCJjdHhNIiwiZ2FtZVN0YXR1cyIsInBsYXllciIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiaSIsIkFycmF5Iiwic3BpYyIsImtwaWMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInVwZGF0ZSIsImdhbWUiLCJrZXlzRG93biIsIm1hbiIsImNhbnZhcyIsIm1vdXNlIiwidG91IiwidXAiLCJtX3kiLCJmbGFnIiwiZnVsbGxpZmUiLCJtcyIsImVuZCIsIk1hdGgiLCJyYW5kb20iLCJvdmVybGFwIiwiaiIsImFicyIsInJ1biIsInRpbWUiLCJEYXRlIiwibm93Iiwic2V0SW50ZXJ2YWwiLCJyIiwiZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///755\n')},335:function(){eval("// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM1LmpzIiwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnMtc2hhZnQtbm9kZS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///335\n")}};__webpack_modules__[755]();var __webpack_exports__={};__webpack_modules__[335]()})();