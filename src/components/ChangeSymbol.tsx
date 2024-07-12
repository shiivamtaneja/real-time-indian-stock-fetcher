import React from 'react';

import { useDispatch } from 'react-redux';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { setSymbol } from '@/store/symbolSlice';

import { updateSymbolSchema } from '@/lib/schema';
import { z } from 'zod';
import { Button } from './ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './ui/select';

const ChangeSymbol = () => {
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof updateSymbolSchema>>({
    resolver: zodResolver(updateSymbolSchema),
    defaultValues: {
      symbol: "TCS"
    }
  });

  const onSubmit = (data: z.infer<typeof updateSymbolSchema>) => {
    dispatch(setSymbol({
      symbol: data.symbol
    }));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Change Symbol</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Symbol</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col space-y-8'
          >
            <FormField
              control={form.control}
              name='symbol'
              render={({ field }) => (
                <>
                  <FormItem>
                    <FormLabel>New Symbol</FormLabel>

                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the symbol" />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="TCS">TCS</SelectItem>
                          <SelectItem value="INFY">INFY</SelectItem>
                          <SelectItem value="RELIANCE">RELIANCE</SelectItem>
                          <SelectItem value="HDFCBANK">HDFCBANK</SelectItem>
                          <SelectItem value="ITC">ITC</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormItem>
                </>
              )}
            />

            <DialogClose asChild>
              <Button type="submit">Update</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ChangeSymbol