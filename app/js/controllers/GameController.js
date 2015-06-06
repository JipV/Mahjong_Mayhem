module.exports = function($scope, gamesFactory) {
	
	//this.game = {"_id":"Ram","__v":0,"tiles":[{"xPos":7,"yPos":1,"zPos":0,"tile":{"_id":76,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bb5"},{"xPos":9,"yPos":1,"zPos":0,"tile":{"_id":135,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bb6"},{"xPos":11,"yPos":2,"zPos":0,"tile":{"_id":10,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bb7"},{"xPos":13,"yPos":2,"zPos":0,"tile":{"_id":37,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bb8"},{"xPos":22,"yPos":2,"zPos":0,"tile":{"_id":102,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bb9"},{"xPos":5,"yPos":3,"zPos":0,"tile":{"_id":29,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bba"},{"xPos":7,"yPos":3,"zPos":0,"tile":{"_id":59,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bbb"},{"xPos":9,"yPos":3,"zPos":0,"tile":{"_id":143,"suit":"Flower","name":"Bamboo","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678bbc"},{"xPos":27,"yPos":3,"zPos":0,"tile":{"_id":20,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bbd"},{"xPos":2,"yPos":4,"zPos":0,"tile":{"_id":45,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bbe"},{"xPos":13,"yPos":4,"zPos":0,"tile":{"_id":121,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bbf"},{"xPos":19,"yPos":4,"zPos":0,"tile":{"_id":2,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc0"},{"xPos":21,"yPos":4,"zPos":0,"tile":{"_id":113,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc1"},{"xPos":25,"yPos":4,"zPos":0,"tile":{"_id":23,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc2"},{"xPos":29,"yPos":4,"zPos":0,"tile":{"_id":100,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc3"},{"xPos":1,"yPos":6,"zPos":0,"tile":{"_id":90,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc4"},{"xPos":3,"yPos":6,"zPos":0,"tile":{"_id":34,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc5"},{"xPos":11,"yPos":6,"zPos":0,"tile":{"_id":91,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc6"},{"xPos":13,"yPos":6,"zPos":0,"tile":{"_id":56,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc7"},{"xPos":18,"yPos":6,"zPos":0,"tile":{"_id":32,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc8"},{"xPos":20,"yPos":6,"zPos":0,"tile":{"_id":52,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bc9"},{"xPos":25,"yPos":6,"zPos":0,"tile":{"_id":35,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bca"},{"xPos":29,"yPos":6,"zPos":0,"tile":{"_id":12,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bcb"},{"xPos":5,"yPos":7,"zPos":0,"tile":{"_id":85,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bcc"},{"xPos":23,"yPos":7,"zPos":0,"tile":{"_id":17,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bcd"},{"xPos":2,"yPos":8,"zPos":0,"tile":{"_id":103,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bce"},{"xPos":7,"yPos":8,"zPos":0,"tile":{"_id":70,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bcf"},{"xPos":10,"yPos":8,"zPos":0,"tile":{"_id":8,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd0"},{"xPos":12,"yPos":8,"zPos":0,"tile":{"_id":50,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd1"},{"xPos":17,"yPos":8,"zPos":0,"tile":{"_id":21,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd2"},{"xPos":19,"yPos":8,"zPos":0,"tile":{"_id":86,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd3"},{"xPos":21,"yPos":8,"zPos":0,"tile":{"_id":5,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd4"},{"xPos":29,"yPos":8,"zPos":0,"tile":{"_id":96,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd5"},{"xPos":15,"yPos":9,"zPos":0,"tile":{"_id":68,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd6"},{"xPos":7,"yPos":10,"zPos":0,"tile":{"_id":123,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd7"},{"xPos":9,"yPos":10,"zPos":0,"tile":{"_id":0,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd8"},{"xPos":11,"yPos":10,"zPos":0,"tile":{"_id":65,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bd9"},{"xPos":13,"yPos":10,"zPos":0,"tile":{"_id":26,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bda"},{"xPos":17,"yPos":10,"zPos":0,"tile":{"_id":98,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bdb"},{"xPos":19,"yPos":10,"zPos":0,"tile":{"_id":95,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bdc"},{"xPos":21,"yPos":10,"zPos":0,"tile":{"_id":89,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bdd"},{"xPos":28,"yPos":10,"zPos":0,"tile":{"_id":133,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bde"},{"xPos":4,"yPos":11,"zPos":0,"tile":{"_id":6,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bdf"},{"xPos":15,"yPos":11,"zPos":0,"tile":{"_id":104,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be0"},{"xPos":23,"yPos":11,"zPos":0,"tile":{"_id":84,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be1"},{"xPos":7,"yPos":12,"zPos":0,"tile":{"_id":25,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be2"},{"xPos":9,"yPos":12,"zPos":0,"tile":{"_id":15,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be3"},{"xPos":11,"yPos":12,"zPos":0,"tile":{"_id":38,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be4"},{"xPos":13,"yPos":12,"zPos":0,"tile":{"_id":131,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be5"},{"xPos":19,"yPos":12,"zPos":0,"tile":{"_id":106,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be6"},{"xPos":3,"yPos":13,"zPos":0,"tile":{"_id":115,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be7"},{"xPos":5,"yPos":13,"zPos":0,"tile":{"_id":53,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be8"},{"xPos":23,"yPos":13,"zPos":0,"tile":{"_id":43,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678be9"},{"xPos":25,"yPos":13,"zPos":0,"tile":{"_id":4,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bea"},{"xPos":19,"yPos":14,"zPos":0,"tile":{"_id":93,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678beb"},{"xPos":4,"yPos":15,"zPos":0,"tile":{"_id":40,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bec"},{"xPos":15,"yPos":15,"zPos":0,"tile":{"_id":83,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bed"},{"xPos":17,"yPos":15,"zPos":0,"tile":{"_id":62,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bee"},{"xPos":24,"yPos":15,"zPos":0,"tile":{"_id":9,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bef"},{"xPos":26,"yPos":15,"zPos":0,"tile":{"_id":87,"suit":"Character","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf0"},{"xPos":7,"yPos":1,"zPos":1,"tile":{"_id":30,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf1"},{"xPos":9,"yPos":1,"zPos":1,"tile":{"_id":75,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf2"},{"xPos":11,"yPos":2,"zPos":1,"tile":{"_id":114,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf3"},{"xPos":13,"yPos":2,"zPos":1,"tile":{"_id":28,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf4"},{"xPos":5,"yPos":3,"zPos":1,"tile":{"_id":142,"suit":"Flower","name":"Chrysantememum","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678bf5"},{"xPos":7,"yPos":3,"zPos":1,"tile":{"_id":73,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf6"},{"xPos":9,"yPos":3,"zPos":1,"tile":{"_id":31,"suit":"Circle","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf7"},{"xPos":27,"yPos":3,"zPos":1,"tile":{"_id":107,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf8"},{"xPos":2,"yPos":4,"zPos":1,"tile":{"_id":97,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bf9"},{"xPos":13,"yPos":4,"zPos":1,"tile":{"_id":69,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bfa"},{"xPos":20,"yPos":4,"zPos":1,"tile":{"_id":63,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bfb"},{"xPos":25,"yPos":4,"zPos":1,"tile":{"_id":18,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bfc"},{"xPos":29,"yPos":4,"zPos":1,"tile":{"_id":57,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bfd"},{"xPos":1,"yPos":6,"zPos":1,"tile":{"_id":60,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bfe"},{"xPos":3,"yPos":6,"zPos":1,"tile":{"_id":112,"suit":"Wind","name":"East","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678bff"},{"xPos":11,"yPos":6,"zPos":1,"tile":{"_id":126,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c00"},{"xPos":13,"yPos":6,"zPos":1,"tile":{"_id":16,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c01"},{"xPos":18,"yPos":6,"zPos":1,"tile":{"_id":11,"suit":"Circle","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c02"},{"xPos":20,"yPos":6,"zPos":1,"tile":{"_id":13,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c03"},{"xPos":25,"yPos":6,"zPos":1,"tile":{"_id":3,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c04"},{"xPos":29,"yPos":6,"zPos":1,"tile":{"_id":136,"suit":"Season","name":"Summer","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678c05"},{"xPos":23,"yPos":7,"zPos":1,"tile":{"_id":55,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c06"},{"xPos":2,"yPos":8,"zPos":1,"tile":{"_id":139,"suit":"Season","name":"Autumn","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678c07"},{"xPos":7,"yPos":8,"zPos":1,"tile":{"_id":41,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c08"},{"xPos":10,"yPos":8,"zPos":1,"tile":{"_id":19,"suit":"Circle","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c09"},{"xPos":12,"yPos":8,"zPos":1,"tile":{"_id":138,"suit":"Season","name":"Spring","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678c0a"},{"xPos":17,"yPos":8,"zPos":1,"tile":{"_id":14,"suit":"Circle","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c0b"},{"xPos":19,"yPos":8,"zPos":1,"tile":{"_id":129,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c0c"},{"xPos":21,"yPos":8,"zPos":1,"tile":{"_id":1,"suit":"Circle","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c0d"},{"xPos":29,"yPos":8,"zPos":1,"tile":{"_id":130,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c0e"},{"xPos":15,"yPos":9,"zPos":1,"tile":{"_id":77,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c0f"},{"xPos":7,"yPos":10,"zPos":1,"tile":{"_id":67,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c10"},{"xPos":9,"yPos":10,"zPos":1,"tile":{"_id":108,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c11"},{"xPos":11,"yPos":10,"zPos":1,"tile":{"_id":109,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c12"},{"xPos":13,"yPos":10,"zPos":1,"tile":{"_id":88,"suit":"Character","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c13"},{"xPos":17,"yPos":10,"zPos":1,"tile":{"_id":7,"suit":"Circle","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c14"},{"xPos":19,"yPos":10,"zPos":1,"tile":{"_id":119,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c15"},{"xPos":21,"yPos":10,"zPos":1,"tile":{"_id":71,"suit":"Bamboo","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c16"},{"xPos":28,"yPos":10,"zPos":1,"tile":{"_id":54,"suit":"Bamboo","name":"5","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c17"},{"xPos":4,"yPos":11,"zPos":1,"tile":{"_id":122,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c18"},{"xPos":15,"yPos":11,"zPos":1,"tile":{"_id":44,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c19"},{"xPos":23,"yPos":11,"zPos":1,"tile":{"_id":81,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c1a"},{"xPos":9,"yPos":12,"zPos":1,"tile":{"_id":66,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c1b"},{"xPos":11,"yPos":12,"zPos":1,"tile":{"_id":99,"suit":"Character","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c1c"},{"xPos":13,"yPos":12,"zPos":1,"tile":{"_id":24,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c1d"},{"xPos":19,"yPos":12,"zPos":1,"tile":{"_id":117,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c1e"},{"xPos":3,"yPos":13,"zPos":1,"tile":{"_id":22,"suit":"Circle","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c1f"},{"xPos":5,"yPos":13,"zPos":1,"tile":{"_id":46,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c20"},{"xPos":23,"yPos":13,"zPos":1,"tile":{"_id":94,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c21"},{"xPos":25,"yPos":13,"zPos":1,"tile":{"_id":51,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c22"},{"xPos":19,"yPos":14,"zPos":1,"tile":{"_id":49,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c23"},{"xPos":4,"yPos":15,"zPos":1,"tile":{"_id":80,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c24"},{"xPos":16,"yPos":15,"zPos":1,"tile":{"_id":27,"suit":"Circle","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c25"},{"xPos":25,"yPos":15,"zPos":1,"tile":{"_id":118,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c26"},{"xPos":8,"yPos":1,"zPos":2,"tile":{"_id":134,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c27"},{"xPos":10,"yPos":2,"zPos":2,"tile":{"_id":127,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c28"},{"xPos":12,"yPos":2,"zPos":2,"tile":{"_id":33,"suit":"Circle","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c29"},{"xPos":6,"yPos":3,"zPos":2,"tile":{"_id":132,"suit":"Dragon","name":"White","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c2a"},{"xPos":8,"yPos":3,"zPos":2,"tile":{"_id":72,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c2b"},{"xPos":13,"yPos":4,"zPos":2,"tile":{"_id":42,"suit":"Bamboo","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c2c"},{"xPos":2,"yPos":5,"zPos":2,"tile":{"_id":128,"suit":"Dragon","name":"Green","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c2d"},{"xPos":25,"yPos":5,"zPos":2,"tile":{"_id":61,"suit":"Bamboo","name":"7","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c2e"},{"xPos":29,"yPos":5,"zPos":2,"tile":{"_id":64,"suit":"Bamboo","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c2f"},{"xPos":12,"yPos":6,"zPos":2,"tile":{"_id":82,"suit":"Character","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c30"},{"xPos":19,"yPos":6,"zPos":2,"tile":{"_id":140,"suit":"Flower","name":"Plum","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678c31"},{"xPos":2,"yPos":7,"zPos":2,"tile":{"_id":92,"suit":"Character","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c32"},{"xPos":29,"yPos":7,"zPos":2,"tile":{"_id":36,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c33"},{"xPos":11,"yPos":8,"zPos":2,"tile":{"_id":79,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c34"},{"xPos":18,"yPos":8,"zPos":2,"tile":{"_id":110,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c35"},{"xPos":20,"yPos":8,"zPos":2,"tile":{"_id":116,"suit":"Wind","name":"South","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c36"},{"xPos":10,"yPos":10,"zPos":2,"tile":{"_id":47,"suit":"Bamboo","name":"3","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c37"},{"xPos":12,"yPos":10,"zPos":2,"tile":{"_id":78,"suit":"Character","name":"2","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c38"},{"xPos":15,"yPos":10,"zPos":2,"tile":{"_id":111,"suit":"Wind","name":"North","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c39"},{"xPos":18,"yPos":10,"zPos":2,"tile":{"_id":74,"suit":"Character","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c3a"},{"xPos":20,"yPos":10,"zPos":2,"tile":{"_id":141,"suit":"Flower","name":"Orchid","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678c3b"},{"xPos":4,"yPos":12,"zPos":2,"tile":{"_id":39,"suit":"Bamboo","name":"1","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c3c"},{"xPos":10,"yPos":12,"zPos":2,"tile":{"_id":58,"suit":"Bamboo","name":"6","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c3d"},{"xPos":12,"yPos":12,"zPos":2,"tile":{"_id":101,"suit":"Character","name":"8","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c3e"},{"xPos":4,"yPos":14,"zPos":2,"tile":{"_id":105,"suit":"Character","name":"9","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c3f"},{"xPos":8,"yPos":2,"zPos":3,"tile":{"_id":137,"suit":"Season","name":"Winter","matchesWholeSuit":true,"__v":0},"_id":"5541fc5b1872631100678c40"},{"xPos":19,"yPos":8,"zPos":3,"tile":{"_id":120,"suit":"Wind","name":"West","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c41"},{"xPos":11,"yPos":10,"zPos":3,"tile":{"_id":124,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c42"},{"xPos":19,"yPos":10,"zPos":3,"tile":{"_id":125,"suit":"Dragon","name":"Red","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c43"},{"xPos":11,"yPos":12,"zPos":3,"tile":{"_id":48,"suit":"Bamboo","name":"4","matchesWholeSuit":false,"__v":0},"_id":"5541fc5b1872631100678c44"}]}	

	var Game = require("./../models/game");

	this.game = new Game(gamesFactory);
	this.game.getTiles();

	var eventTile1 = null;
	var tile1 = null;

	this.selectTile = function(event, selectedTile) {

		// Als de tegel niet vrij is, dan doe niks
		if (!this.game.checkTileFreedom(selectedTile)) {
			return;
		}

		// Voegt blauw gloed toe
		$(event.target).addClass('isSelected');
		
		if (tile1 == null) {
			eventTile1 = event;
			tile1 = selectedTile;
		} 
		else {
			var targetTile1 = eventTile1.target;
			var targetTile2 = event.target;

			// Haalt blauwe gloed weg
			$(targetTile1).removeClass('isSelected');
			$(targetTile2).removeClass('isSelected');

			if (selectedTile != tile1) {
				if (this.game.checkMove(tile1, selectedTile)) {
					$(targetTile1).remove();
					$(targetTile2).remove();
					this.playerHasMatch(tile1, selectedTile);
					this.checkMatchesLeft();
				}
				else {					
					// Voegt rode gloed toe
					$(targetTile1).addClass('noMatch');
					$(targetTile2).addClass('noMatch');

					// Haalt rode gloed weg
					setTimeout(function() {
						$(targetTile1).removeClass('noMatch');
						$(targetTile2).removeClass('noMatch');
					}, 800);
				}
			}

			eventTile1 = null;
			tile1 = null;
		}
	}

	this.playerHasMatch = function(tile1, tile2) {
		console.log("Match !!");


		//this.game.addMatch(tile1._id, tile2._id);
	}

	this.checkMatchesLeft = function() {
		if (!this.game.matchesLeft()) {
			alert("There are no more matches. The game is over.");
		}
	}

}