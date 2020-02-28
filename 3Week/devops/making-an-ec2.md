## Making an EC2
### SetUp
- log in to console
- search for ec2 and go to ect dashboard
- make sure you are in the correct region
- click the launch instance button
### EC2 Options
- check the free tier only checkbox
- select amazon linux ami 2
- choose t2 micro for instance type
- choose to configure instance details
#### Finding your VPC and Subnet of DB
- open rds dasboard
- click on instances
- look at region & AZ for the subnet
- look at VPC for vpc
### EC2 Options continued
- choose same network and subnet as rds
- all other defaults for configure instance details are correct
- click add storage
- default options are fine
- click add tags
- you should add a tag called name
- next click configure security group
- create a new security group 
- name it something better than launch-wizard1
- take the default rule
- click review and launch
- click launch
- choose the key pair to use for connecting
- probably you are making a new key pair
- give it a name, download it and don't lose it
- click launch instances
## Managing Ec2
- go back to ec2 dashboard
- click on instances
- here you can see all info about the instance
- if you click on the connect button
- it will give you the command to copy paste into your terminal to connect
- in gitbash, cd to the directory that has your key
- copy paste the command from the connect button
- looks like "ssh -i "1910JavaReactEc2Key.pem" ec2-user@ec2-54-144-56-133.compute-1.amazonaws.com"
- make sure to type yes if gitbash says the key is unverified
- use the exit command to get back to your computer
