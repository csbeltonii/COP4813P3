var arr = new Array();

function findMin()
{
    var min = arr[0];
    for (var i=0;i<arr.length;i++)
    {
        if (arr[i] < min)
            min = arr[i];
    }  

    return min;
}

function findMax()
{
    var max = arr[0];
    for (var i=0;i<arr.length;i++)
    {
        if  (arr[i] > max)
            max = arr[i];
    }

    return max;
}

function calcMedian()
{
    var median;

    if (arr.length % 2 != 0)
    {
        median = arr[(arr.length/2 + (arr.length/2)+1) / 2];
    }
    else
        median = arr[arr.length / 2];

    return median;
}

function calcSum()
{
    var sum = 0;

    for (var i = 0;i<arr.length;i++)
    {
        sum += arr[i];
    }

    return sum;
}

function calcMean()
{
    var sum = calcSum();

    var mean = sum / arr.length;

    return mean;
}

function calcVariance()
{
    var mean = calcMean();
    var sum = 0;
    var variance;

    for (var i=0;i<arr.length;i++)
    {
        sum += Math.pow(mean - arr[i], 2);
    }

    variance = sum / arr.length;

    return variance.toPrecision(5);
}

function calcStdDev()
{
    return Math.sqrt(calcVariance()).toPrecision(5);
} 

function calcMode()
{
    var modes = [], count = [], i, number, maxIndex = 0;
    
    for (i = 0; i < arr.length; i += 1) {
        number = arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    
    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }
        }
    
    return modes;
}

function performStatistics() {
    var userInput = document.getElementById("arr").value;
    var stringArray = userInput.split(" ");
    arr = stringArray.map((s)=>parseInt(s));

    if (isNaN(userInput[0]))
    {
        alert("Please enter valid numbers.");
        return false;
    }
    else
    {
        document.getElementById("min").value = findMin();
        document.getElementById("max").value = findMax();
        document.getElementById("sum").value = calcSum();
        document.getElementById("mean").value = calcMean();
        document.getElementById("median").value = calcMedian();
        document.getElementById("mode").value = calcMode();
        document.getElementById("stdDev").value = calcStdDev();
        document.getElementById("variance").value = calcVariance();
        return true;
    }
}

function reset()
{
    document.getElementById("numArray").value = "";
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("sum").value = "";
    document.getElementById("mean").value = "";
    document.getElementById("median").value = "";
    document.getElementById("mode").value = "";
    document.getElementById("stdDev").value = "";
    document.getElementById("variance").value = "";
}