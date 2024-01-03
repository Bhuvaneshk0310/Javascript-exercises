
//Find the element an array

        const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

        function findIndex() {
            const inputValue = parseInt(document.getElementById('valueInput').value);
            const index = array.indexOf(inputValue);

            if (index !== -1) {
                document.getElementById('result').innerText = `Index of ${inputValue}: ${index}`;
            } else {
                document.getElementById('result').innerText = `${inputValue} not found in the array.`;
            }
        }


