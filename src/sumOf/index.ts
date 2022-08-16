function sumOf(x: number, y: number): number;
function sumOf(x: string, y: string): string;
function sumOf(x: any, y: any) {
  return x + y;
}

export { sumOf };
