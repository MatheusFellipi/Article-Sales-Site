import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('sale_item')
class SaleItem {
  @PrimaryColumn()
  id: string;

  @Column()
  code_sale: string;

  @Column()
  item_product: string;

  @Column()
  seller: string;

  @Column()
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { SaleItem };
