function rps (p1, p2) {
    return (p1[0]=='p'&&p2[0]=='r')||(p1[0]=='r'&p2[0]=='s')||(p1[0]=='s'&&p2[0]=='p')? 'Player 1 won!' : (p1==p2?'Draw!':'Player 2 won!')
}
