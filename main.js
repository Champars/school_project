function a() {
    score = 0;
    if (document.getElementById("a").value == "Unhealthy" || document.getElementById("a").value == "unhealthy") {
        score = score + 1;
    }
    if (document.getElementById("b").value == "Healthy" || document.getElementById("b").value == "healthy") {
        score = score + 1;
    }
    if (document.getElementById("c").value == "Healthy" || document.getElementById("c").value == "healthy") {
        score = score + 1;
    }
    if (document.getElementById("d").value == "Healthy" || document.getElementById("d").value == "healthy") {
        score = score + 1;
    }
    if (document.getElementById("e").value == "Healthy" || document.getElementById("e").value == "healthy") {
        score = score + 1;
    }
    if (document.getElementById("f").value == "Unhealthy" || document.getElementById("f").value == "unhealthy") {
        score = score + 1;
    }
    if (document.getElementById("g").value == "Unhealthy" || document.getElementById("g").value == "unhealthy") {
        score = score + 1;
    }
    if (document.getElementById("h").value == "Healthy" || document.getElementById("h").value == "healthy") {
        score = score + 1;
    }
    if (document.getElementById("i").value == "Unhealthy" || document.getElementById("i").value == "unhealthy") {
        score = score + 1;
    }
    if (document.getElementById("j").value == "Healthy" || document.getElementById("j").value == "healthy") {
        score = score + 1;
    }
    document.getElementById("sc").innerHTML = "Score: " + score;
}

function reset() {
    document.getElementById("sc").innerHTML = "score: ";
}