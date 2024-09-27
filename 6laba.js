const queue = [];
function updateQueueDisplay() {
    const queueDiv = document.getElementById('queue');
    queueDiv.innerHTML = '';
    for (let i = 0; i < queue.length; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.textContent = queue[i];
        queueDiv.appendChild(square);
    }
}
function enqueue() {
    const value = queue.length + 1;
    queue.push(value);
    updateQueueDisplay();
}
function dequeue() {
    if (queue.length > 0) {
        queue.shift();
        updateQueueDisplay();
    } else {
        alert('Очередь пуста');
    }
}