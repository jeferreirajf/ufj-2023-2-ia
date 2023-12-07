parent(jose,arthur).
parent(raissa,arthur).
parent(jose,raul).
parent(raissa,raul).
parent(regina,raissa).
parent(moacir,raissa).
parent(regina,inaie).
parent(moacir,inaie).
parent(jose_e,jose).
parent(gilda,jose).
parent(jose_e,juliana).
parent(gilda,juliana).
parent(juliana,mateus).
parent(juliana,iago).
parent(gubio,mateus).
parent(lauro,iago).

brother(P1,P2) :- 
    parent(X,P1),
    parent(X,P2).

grandparent(P1,P2) :-
    parent(P1,X),
    parent(X,P2).

cousin(P1,P2) :- 
    parent(X,P1),
    parent(Y,P2),
    brother(X,Y),
    X\=Y.