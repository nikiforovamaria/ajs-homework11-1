export default class Team {
  constructor() {
    this.members = [
      {
        name: 'Лучник', type: 'Bowman', health: 50, level: 1, attack: 40, defence: 10,
      },
      {
        name: 'Демон', type: 'Daemon', health: 40, level: 1, attack: 40, defence: 15,
      },
      {
        name: 'Маг', type: 'Magician', health: 60, level: 1, attack: 40, defence: 20,
      },
      {
        name: 'Мечник', type: 'Swordsman', health: 30, level: 1, attack: 40, defence: 10,
      },
      {
        name: 'Нежить', type: 'Undead', health: 70, level: 1, attack: 40, defence: 30,
      },
      {
        name: 'Зомби', type: 'Zombie', health: 80, level: 1, attack: 40, defence: 25,
      },
    ];
  }

  [Symbol.iterator]() {
    const { members } = this;
    let current = 0;
    const last = members.length;
    return {
      next() {
        if (current < last) {
          const val = members[current];
          current += 1;
          return {
            done: false,
            value: val,
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
