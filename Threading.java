public class Thread1 extends Thread{
    @Override
    public void run(){
        for(int i=0; i<5; i++){
            try{
            System.out.println(i);
            Thread.sleep(5000);
            }catch(Exception e){
                System.err.println(e);
            }
        }

    }
    public static void main(String[] args) throws Exception{
        Thread1 T=new Thread1();   //main thread will execute first run() method through internally calling start()method 
        //T.run();
        T.start();
        for(int i=0; i<5; i++){
            System.out.println("Clayfin Technologies!!!!");//It will print "Clafin technologies" after every 5 Seconds interval.
            Thread.sleep(5000);                            //passing 5000 as parameter to be counted as 5 seconds.
        }
    }
}
