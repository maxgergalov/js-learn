function getMiddle(s)
{
    return s.length%2==1 ? s[(s.length-1)/2] : s.substr(s.length/2-1,2)
}