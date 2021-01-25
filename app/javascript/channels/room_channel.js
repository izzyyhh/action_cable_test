import consumer from "./consumer"

document.addEventListener('turbolinks:load', () => {
  const userIdEl = document.getElementById('user-id')
  const roomIdEl = document.getElementById('room-id')
  
  const userId = Number(userIdEl.getAttribute('data-user-id'))
  const roomId = Number(roomIdEl.getAttribute('data-room-id'))

  consumer.subscriptions.create( {channel: "RoomChannel", room_id: roomId}, {
    connected() {
      console.log("connected to " + roomId)
      // Called when the subscription is ready for use on the server
    },
  
    disconnected() {
      // Called when the subscription has been terminated by the server
    },
  
    received(data) {
      console.log(data)
      // Called when there's incoming data on the websocket for this channel
    }
  });
})
