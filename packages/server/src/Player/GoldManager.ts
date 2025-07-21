import { PlayerCtor } from "@rpgjs/common";

export interface GoldManager {
  /**
   * You can change the game money
   *
   * ```ts
   * player.gold += 100
   * ```
   *
   * @title Change Gold
   * @prop {number} player.gold
   * @default 0
   * @memberof GoldManager
   * */
  gold: number;
}

export function WithGoldManager<TBase extends PlayerCtor>(
  Base: TBase
): new (...args: ConstructorParameters<TBase>) => InstanceType<TBase> &
  GoldManager {
  return class extends Base {
    set gold(val: number) {
      if (val < 0) {
        val = 0;
      }
      this._gold.set(val);
    }

    get gold(): number {
      return this._gold();
    }
  } as unknown as any;
}

/**
 * Type helper to extract the interface from the WithGoldManager mixin
 * This provides the type without duplicating method signatures
 */
export type IGoldManager = InstanceType<ReturnType<typeof WithGoldManager>>;
