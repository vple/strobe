(function() {
    var Line = function(prevLine, nextLine, points, color) {
        // stores prev and next lines using a doubly linked list structure
        this.prevLine = prevLine;
        this.nextLine = nextLine;
        this.points = points;       // array of points to move to when drawing this line
                                    // first point should be starting point of line
        this.color = color;
        
        if (prevLine != null) {
            prevLine.nextLine = this;
        }
        if (nextLine != null) {
            nextLine.prevLine = this;
        }
    };
    window.Line = Line;
    
    Line.prototype.draw = function(context, color) {
        context.strokeStyle = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        context.beginPath();
        context.moveTo(this.points[0][0], this.points[0][1]);
        
        for (i = 0; i < this.points.length; i++) {
            context.lineTo(this.points[i][0], this.points[i][1]);
        }
        context.stroke();
    }
    
})();